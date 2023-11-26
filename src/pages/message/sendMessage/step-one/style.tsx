import styled from "styled-components";

export const Div = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 22.5rem;
`;

export const Section = styled.section`
  max-height: 20rem;
  overflow-y: auto;

  > div {
    margin: 24px 0;
  }
`;
