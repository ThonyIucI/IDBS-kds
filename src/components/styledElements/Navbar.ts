import styled from "styled-components";

export const NavbarContainer = styled.div`
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

export const Title = styled.h1`
  margin: 0;
  color: white;
  font-size: 2.2rem;
`;

export const Dropdown = styled.select`
  padding: 8px;
  font-size: 16px;
`;

export const Option = styled.option``;