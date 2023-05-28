
import Alert from "@/components/jsxElements/Alert";
import Navbar from "@/components/jsxElements/Navbar";
import OrderCard from "@/components/jsxElements/OrderCard";
import { Container, LoaderContainer, Spinner } from "@/components/styledElements";
import { OrdersContainer } from "@/components/styledElements/Orders";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getOrders } from "@/redux/actions/orderActions";
import { FC, useEffect } from "react";


const Home: FC = () => {
    const dispatch = useAppDispatch(),
    { orders, pendingOrder,backupOrders,orderStatuses,statusSelected } = useAppSelector(store => store.orders)
    
    
        useEffect(() => {
        if (!backupOrders.length) {
            dispatch(getOrders())
        }
    }, [])
    return (<>
      <Navbar/>
        <Container>
      <Alert/>
            {!pendingOrder ?
                (orders?.length ?
                    <OrdersContainer>
                        {orders?.map(order =>
                            <OrderCard
                                key={order.code}
                                order={order} />

                        )}
                    </OrdersContainer> :
                    <h3>No hay resultados {statusSelected?` que tengan el estado ${orderStatuses.find(e => e.id === statusSelected)?.name}`:null}</h3>) :
                <LoaderContainer>
                    <Spinner />
                </LoaderContainer>

            }
        </Container>
    </>
          
    )
}

export default Home;