import { Customer, Order, Product } from "@/schemas"
import { AppDispatch } from "../store"
import { setOrders, setPendingOrder } from "../slices/orderSlice"
import { PosibleProducts, oderStatuses } from "@/utils/data"

// Generar código aleatorio
const generateSaleCode = (): string => {
    const min = 1000,
        max = 9999,
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return `IDBI-${randomNumber}`
}
// Obtener una fecha aleatoria menor a la última hora actual
const generateRandomDate = (): Date => {
    const currentDate = new Date();
    const randomMinutes = Math.floor(Math.random() * currentDate.getMinutes());
    const randomDate = new Date();
    randomDate.setDate(currentDate.getDate());
    randomDate.setHours(currentDate.getHours());
    randomDate.setMinutes(randomMinutes);
    return randomDate;
};
const generateRandomProducts=()=>{
    const products:Product[]=[]
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
const getDeliverTime = (dateToShow: string,estimatedTime:number) => {
    const startTime = new Date(dateToShow);
    const startTimeMilliseconds = startTime.getTime();
    const estimatedTimeMilliseconds = estimatedTime * 60000;
    const deliveryTimeMilliseconds = startTimeMilliseconds + estimatedTimeMilliseconds;

    const deliveryTime = new Date(deliveryTimeMilliseconds);

    // Ejemplo de obtención de componentes de fecha y hora
    const deliveryHour = deliveryTime.getHours();
    const deliveryMinutes = String(deliveryTime.getMinutes()).padStart(2, '0');
    return `${deliveryHour}:${deliveryMinutes}`
}
// Generar datos aleatorios para las órdenes
const generateRandomOrder = (): Order => {
    const randomId = Math.random().toString(36).slice(2, 9)
    const randomDateTime = generateRandomDate()
    const randomCode = generateSaleCode()
    const randomEstimatedTime = Math.floor(Math.random() * 60) + 1
    const randomCustomer: Customer = {
        id: Math.random().toString(36).slice(2, 9),
        name: `Cliente ${Math.floor(Math.random() * 10) + 1}`,
        address: `Dirección ${Math.floor(Math.random() * 10) + 1}`,
    }
    const randomProducts = generateRandomProducts()
    const randomTotalPrice =
        randomProducts.reduce((acc, product) => acc + product.price * product.amount, 0)
    // const randomStatus: Order['status'] =
    //     Math.random() < 0.33 ? 'pending' : Math.random() < 0.66 ? 'completed' : 'canceled'
    const randomStatus = oderStatuses[Math.floor(Math.random() *4)]
    // console.log(randomStatus);
    
    return {
        id: randomId,
        startTime:randomStatus.id===1?'': randomDateTime.toISOString(),
        estimatedFinished: randomStatus.id === 2 ?
         getDeliverTime(randomDateTime.toISOString(), randomEstimatedTime) :"--:--",
        endTime: (randomStatus.id === 4) || (randomStatus.id===3) ? getHourFromISO(generateRandomDate().toISOString()) : '',
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
        let orders: Order[] = []
        dispatch(setPendingOrder(true))
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                //Genera 20 elementos aleatoriamente
                orders = Array.from({ length: 20 }, () => generateRandomOrder())
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






