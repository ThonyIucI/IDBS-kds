import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setFilterByStatus } from '@/redux/slices/orderSlice';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Title = styled.h1`
  margin: 0;
  color: white;
  font-size: 2.2rem;
`;

const Dropdown = styled.select`
  padding: 8px;
  font-size: 16px;
`;

const Option = styled.option``;
const Legend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  font-size: 14px;
  margin-top: 10px;
`;
const Navbar = () => {
    const dispatch = useAppDispatch(),
        {statusSelected, orderStatuses} =useAppSelector(store=>store.orders)


    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const filter = Number(e.target.value )
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
