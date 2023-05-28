import styled, { DefaultTheme } from "styled-components";
type Color = keyof DefaultTheme['colors'];
interface props {
    color?: Color;
    show?: boolean;
}
const AlertContainer = styled.div<props>`
  position: relative;
  display: ${(props) => (props.show ? "block" : "none")};
  padding: 16px;
  background-color: ${(props) => props.theme.colors[props.color || "success"]};
  color: white;
  margin-bottom: 16px;
  width: 100%; 
  border-radius: 8px;
  text-align: center;
`;
export default AlertContainer