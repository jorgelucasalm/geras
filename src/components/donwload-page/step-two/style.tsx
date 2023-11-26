import styled from "styled-components";

export const Div = styled.div`
  margin: 0 2rem;
`;

export const AppDiv = styled.div`
  margin-top: 2rem;

  > div {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  > div p {
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 16px;
    text-transform: capitalize;
  }

  > button {
    margin: 1rem auto;
  }
`;
