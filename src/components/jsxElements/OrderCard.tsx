
import { Order } from '@/schemas';
import { FC } from 'react';
import { ButtonContainer } from '../styledElements';
import { Card, CardHeader, ProductDescription, ProductItem, ProductList, TextBold, ProductTitle } from '../styledElements/Orders';
import ActionButtons from './ActionButtons';
interface props {
    order: Order
}
const OrderCard: FC<props> = ({ order }) => {
    const getDeliverTime = (order: Order) => {
        if (!order.startTime) return "--:--"
        const dateToShow = order.statusId === 4 ? order.endTime : order.startTime
        const startTime = new Date(dateToShow);
        const startTimeMilliseconds = startTime.getTime();
        const estimatedTimeMilliseconds = order.estimatedTime * 60000;
        const deliveryTimeMilliseconds = startTimeMilliseconds + estimatedTimeMilliseconds;

        const deliveryTime = new Date(deliveryTimeMilliseconds);

        // Ejemplo de obtención de componentes de fecha y hora
        const deliveryHour = deliveryTime.getHours();
        const deliveryMinutes = String(deliveryTime.getMinutes()).padStart(2, '0');
        return `${deliveryHour}:${deliveryMinutes}`
    },
    setcolor = (order: Order) => {
            switch (order.statusId) {
                case 1:
                    return 'secondary'
                case 2:
                    return new Date(order.startTime).getTime() + order.estimatedTime * 60000 > Date.now()
                        ? 'primary'
                        : 'secondary'
                case 3:
                    return 'success'
                case 4:
                    return 'error'

                default:
                    break;
            }
        }


    return (
        <Card>
            <CardHeader color={setcolor(order)}>
                <div>
                    <TextBold>{order.statusId===4?order.endTime:getDeliverTime(order)}</TextBold>
                    <TextBold>${order.totalPrice}</TextBold>
                </div>
                <div>
                    <TextBold>{order.customer.name}</TextBold>
                    <TextBold>{order.code}</TextBold>
                </div>
            </CardHeader>
            <ProductList>
                {order.products.map((product) => (
                    <div key={`${product.id}-${order.code}`}>
                        <ProductItem >
                            <TextBold>{product.amount}X</TextBold>
                            <ProductTitle>{product.name}</ProductTitle>
                            <ProductDescription>{product.description}</ProductDescription>
                        </ProductItem>
                        <hr />
                    </div>
                ))}
            </ProductList>
            <ButtonContainer>
                <ActionButtons id={order.statusId} orderId={order.id} key={order.id} />
            </ButtonContainer>
        </Card>);
}

export default OrderCard;
