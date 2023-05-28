
import { Order } from '@/schemas';
import { FC } from 'react';
import { ButtonContainer } from '../styledElements';
import { Card, CardHeader, ProductDescription, ProductItem,
     ProductList, TextBold, ProductTitle } from '../styledElements/Orders';
import ActionButtons from './ActionButtons';
import { setcolor } from '@/redux/actions/orderActions';
interface props {
    order: Order
}
const OrderCard: FC<props> = ({ order }) => {
    
    return (
        <Card>
            <CardHeader color={setcolor(order)}>
                <div>
                    <TextBold>{order.estimatedFinished}</TextBold>
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
                <ActionButtons id={order.statusId} orderId={order.id} key={`${order.code}-${order.id}`} />
            </ButtonContainer>
        </Card>);
}

export default OrderCard;
