
import styled, { DefaultTheme } from "styled-components";

type Color = keyof DefaultTheme['colors'];

interface propsy {
  color?: Color;
}
interface OrdersContainerProps {
  theme: DefaultTheme;
}

export const OrdersContainer = styled.div<OrdersContainerProps>`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap:8px;
}
`;
export const Card = styled.div`
  width: 250px;
  border: 1px solid gray;
  border-radius: 8px;
`;

export const CardHeader = styled.div<propsy>`
  background-color: ${(props) => props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color:white;
    padding: 16px;
    
`;

export const TextBold = styled.div`
  font-weight: bold;
`;
export const ProductTitle = styled.div`
 font-weight: bold;
  margin-left:10px;
`;
export const ProductList = styled.ul`
  list-style: none;
  padding: 16px;
  height: 200px;
  overflow: auto;
`;

export const ProductItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

export const ProductDescription = styled.span`
  grid-column: span 2;
  color: gray;
  margin-left:30px
`;