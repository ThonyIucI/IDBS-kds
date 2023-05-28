import styled, { DefaultTheme } from "styled-components";

type Color = keyof DefaultTheme['colors'];

interface ButtonProps {
  color?: Color;
  filled?: boolean;
}
const Button = styled.button<ButtonProps>`
 background-color: ${(props) =>
    props.filled ? props.theme.colors[props.color || 'primary'] : 'transparent'};
  color: ${(props) =>
    props.filled
      ? 'white'
      : props.theme.colors[props.color || 'primary']};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) =>
    props.filled
      ? props.theme.colors[props.color || 'primary']
      : props.theme.colors.secondary};
    color: ${(props) => (props.filled ? props.theme.colors.text : 'white')};
    opacity:0.8
  }
`;
export default Button