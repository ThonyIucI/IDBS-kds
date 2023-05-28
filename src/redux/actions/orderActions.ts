import { Customer, Order, Product } from "@/schemas"
import { AppDispatch } from "../store"
import { setOrders, setPendingOrder } from "../slices/orderSlice"
import { PosibleProducts, orderStatuses } from "@/utils/data"

// Generar código ordenado
const generateSaleCode = (index: number): string => {
    return `IDBI-${index + 1000}`
}
// Obtener una fecha aleatoria menor a la última hora actual
export const generateRandomTime = (): string => {
    const currentDate = new Date();
    const randomMinutes = Math.floor(Math.random() * 60);
    const randomTime = new Date();
    randomTime.setHours(currentDate.getHours());
    randomTime.setMinutes(randomMinutes);

    const formattedHour = randomTime.getHours().toString().padStart(2, '0');
    const formattedMinute = randomTime.getMinutes().toString().padStart(2, '0');

    return `${formattedHour}:${formattedMinute}`;
};
export const addMinutesToTime = (time: string, minutesToAdd: number): string => {
    const [hourStr, minuteStr] = time.split(':');
    let hour = parseInt(hourStr, 10);
    let minute = parseInt(minuteStr, 10);

    // Sumar los minutos
    minute += minutesToAdd;

    // Ajustar si los minutos superan los 60
    if (minute >= 60) {
        hour += Math.floor(minute / 60);
        minute %= 60;
    }

    // Formatear nuevamente la hora y los minutos
    const formattedHour = hour.toString().padStart(2, '0');
    const formattedMinute = minute.toString().padStart(2, '0');

    return `${formattedHour}:${formattedMinute}`;
};
const generateRandomProducts = () => {
    const products: Product[] = []
    const numProducts = Math.floor(Math.random() * 4) + 1; // Generar un número aleatorio entre 1 y 4
    for (let i = 0; i < numProducts; i++) {
        const randomProduct = PosibleProducts[Math.floor(Math.random() * PosibleProducts.length)];
        const randomDescription = randomProduct.descriptions[Math.floor(Math.random() * randomProduct.descriptions.length)];
        const randomAmount = Math.floor(Math.random() * 4) + 1; // Generar un número aleatorio entre 1 y 4

        const product: Product = {
            id: randomProduct.id,
            name: randomProduct.name,
            description: randomDescription,
            price: randomProduct.price,
            amount: randomAmount,
        };
        products.push(product)
    }
    const uniqueProducts = products.filter(
        (product, index, self) => index === self.findIndex((p) => p.id === product.id)
    );
    return uniqueProducts
}

// Generar datos aleatorios para las órdenes
const generateRandomOrder = (index: number): Order => {
    const randomId = Math.random().toString(36).slice(2, 9)
    const randomDateTime = generateRandomTime()
    const randomCode = generateSaleCode(index)
    const randomEstimatedTime = Math.floor(Math.random() * 60) + 1
    const randomCustomer: Customer = {
        id: Math.random().toString(36).slice(2, 9),
        name: `Cliente ${Math.floor(Math.random() * 10) + 1}`,
        address: `Dirección ${Math.floor(Math.random() * 10) + 1}`,
    }
    const randomProducts = generateRandomProducts()
    const randomTotalPrice =
        randomProducts.reduce((acc, product) => acc + product.price * product.amount, 0)
    const randomStatus = orderStatuses[Math.floor(Math.random() * 4)]

    return {
        id: randomId,
        startTime: randomStatus.id === 1 ? "--:--" : randomDateTime,
        estimatedFinished: randomStatus.id === 1 ? "--:--" :
            addMinutesToTime(randomDateTime, randomEstimatedTime),
        endTime: (randomStatus.id === 4) || (randomStatus.id === 3) ? addMinutesToTime(randomDateTime, randomEstimatedTime) : '',
        code: randomCode,
        estimatedTime: randomEstimatedTime,
        customer: randomCustomer,
        products: randomProducts,
        totalPrice: randomTotalPrice,
        statusId: randomStatus.id,
        status: randomStatus
    }
}
export const getOrders = () => async (dispatch: AppDispatch) => {
    try {
        const orders: Order[] = []
        dispatch(setPendingOrder(true))
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                //Genera 40 elementos aleatoriamente
                for (let index = 0; index < 40; index++) {
                    orders.push(generateRandomOrder(index))

                }

                dispatch(setOrders(orders))
                resolve()
            }, 2000)
        })
    } catch (error) {
        console.log(error)
    } finally {
        dispatch(setPendingOrder(false))

    }
}
export const getHourFromISO = (isoDateString: string) => {
    const date = new Date(isoDateString);
    const hour = date.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    return hour;
};

export const sortOrders = (orders: Order[]) => {

    const ordersWithEstimatedFinished = orders.filter((order) => order.statusId !== 1);
    const ordersWithoutEstimatedFinished = orders.filter((order) => order.statusId === 1);
    ordersWithEstimatedFinished.sort((order1, order2) => {
        return isHourGreater(order1.estimatedFinished, order2.estimatedFinished) ? 1 : -1;
    });
    const sortedOrders = [...ordersWithEstimatedFinished, ...ordersWithoutEstimatedFinished];
    return sortedOrders
}

export const isHourGreater = (hour1: string, hour2: string): boolean => {
    const [hour1Hours, hour1Minutes] = hour1.split(":");
    const [hour2Hours, hour2Minutes] = hour2.split(":");

    const date1 = new Date();
    date1.setHours(Number(hour1Hours));
    date1.setMinutes(Number(hour1Minutes));

    const date2 = new Date();
    date2.setHours(Number(hour2Hours));
    date2.setMinutes(Number(hour2Minutes));

    return date1 > date2;
};
export const getCurrentTime = (): string => {
    const currentDate = new Date();
    const currentHours = String(currentDate.getHours()).padStart(2, "0");
    const currentMinutes = String(currentDate.getMinutes()).padStart(2, "0");

    return `${currentHours}:${currentMinutes}`;
};

export const setcolor = (order: Order) => {
    switch (order.statusId) {
        case 1:
            return 'secondary'
        case 2:
            return isHourGreater(order.estimatedFinished, getCurrentTime())
                ? 'primary'
                : 'info'
        case 3:
            return 'success'
        case 4:
            return 'error'

        default:
            break;
    }
}

