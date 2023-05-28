import { useAppDispatch } from "@/hooks/redux";
import { setOrderStatus } from "@/redux/slices/orderSlice";
import { Button } from "../styledElements";
import { StyledLabel } from "../styledElements/Orders";

interface Props {
    id: number;
    orderId: string
}
const ActionButtons: React.FC<Props> = ({ id, orderId }) => {
    let content: React.ReactNode;
    const dispatch = useAppDispatch(),
        handleChangeStatus = (newStatusId: number, orderId: string) => {
            dispatch(setOrderStatus({ newStatusId, orderId }))
        }
    switch (id) {
        case 2:
            content =
                <>
                    <Button filled color='success' onClick={() => handleChangeStatus(3, orderId)}>Completar</Button>
                    <Button filled color='error' onClick={() => handleChangeStatus(4, orderId)}>Cancelar</Button>
                </>
            break;
        case 3:
            content = <StyledLabel color="success">COMPLETADO</StyledLabel>;
            break;
        case 4:
            content = <StyledLabel color="error">CANCELADO</StyledLabel>;
            break;
        default:
            content = <Button filled color='primary' onClick={() => handleChangeStatus(2, orderId)}>Empezar</Button>
            break;
    }

    return <>{content}</>;
};

export default ActionButtons;