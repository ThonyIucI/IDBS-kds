import styled from "styled-components";

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 32px;
  &:hover{
    transform: scale(1.2)
  }
`;
export default CloseButton