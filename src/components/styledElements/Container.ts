import styled from "styled-components";

const Container = styled.div`
margin-top:80px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  padding: ${(props) =>(props.theme.mediaQueries.small ? '0' : '20px')};
`;

export default Container;