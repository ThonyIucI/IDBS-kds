import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) =>(props.theme.mediaQueries.small ? '0' : '20px')};
`;

export default Container;