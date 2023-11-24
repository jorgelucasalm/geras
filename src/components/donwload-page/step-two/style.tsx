import styled from "styled-components";

export const Div = styled.div`
  margin: 0 2rem;
`;

export const App = styled.div`
  display: flex;
  align-items: center;

  > svg {
    color: green;
  }

  > p {
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 16px;
  }
`;
