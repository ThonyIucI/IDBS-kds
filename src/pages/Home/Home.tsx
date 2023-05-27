
import OrderCard from "@/components/jsxElements/OrderCard";
import { Container, LoaderContainer, Spinner } from "@/components/styledElements";
import { OrdersContainer } from "@/components/styledElements/Orders";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getOrders } from "@/redux/actions/orderActions";
import { FC, useEffect } from "react";


const Home: FC = () => {
    const dispatch = useAppDispatch(),
        { orders, pendingOrder } = useAppSelector(store => store.orders)

    useEffect(() => {
        if (!orders.length) {
            dispatch(getOrders())
        }
    }, [dispatch])
    return (
        <Container>
            {!pendingOrder ?
                (orders?.length ?
                    <OrdersContainer>
                        {orders?.map(order =>
                            <OrderCard
                                key={order.code}
                                order={order} />

                        )}
                    </OrdersContainer> :
                    <h3>No hay ordenes pendientes hasta el momento</h3>) :
                <LoaderContainer>
                    <Spinner />
                </LoaderContainer>

            }
        </Container>
    )
}

export default Home;