import styled from "styled-components";

export const Div = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;

  > p {
    margin: 0 auto;
    color: var(--blue-600);
    padding-top: 1.5rem;
  }

  > #array-messages {
    height: 22.5rem;
    max-height: 22.5rem;
    overflow-y: scroll;
    display: flex;
    flex-direction: column-reverse;
    row-gap: 1.5rem;
    padding-bottom: 1.5rem;

    > p[data-type="APP"] {
      margin: 0;
      margin-right: auto;
    }
    > p[data-type="USER"] {
      margin: 0;
      margin-left: auto;
      display: flex;
      justify-content: start;
      overflow-x: hidden;
    }
  }
`;

export const DivModalBody = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    color: black;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 16px;
  }
`;
