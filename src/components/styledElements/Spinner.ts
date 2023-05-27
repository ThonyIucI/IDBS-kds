import styled, { keyframes } from 'styled-components';

// Definir la animación del loader
const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid ${(props) => props.theme.colors.primary};
  border-top-color: transparent;
  animation: ${spinAnimation} 0.8s linear infinite;
`;
export default Spinner
