import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setFilterByStatus } from '@/redux/slices/orderSlice';
import { Dropdown, NavbarContainer, Option, Title } from '../styledElements/Navbar';

const Navbar = () => {
    const dispatch = useAppDispatch(),
        { statusSelected } = useAppSelector(store => store.orders)

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const filter = Number(e.target.value)
        dispatch(setFilterByStatus(filter))
    };

    return (
        <NavbarContainer>
            <Title>IDBI-SDK</Title>
            <Dropdown value={statusSelected} onChange={handleFilterChange}>
                <Option value={0}>Ver todas</Option>
                <Option value={1}>Pendiente</Option>
                <Option value={2}>En proceso</Option>
                <Option value={3}>Completado</Option>
                <Option value={4}>Cancelado</Option>
            </Dropdown>
        </NavbarContainer>
    );
};

export default Navbar;
