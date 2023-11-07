import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  min-width: 18rem;

  span {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--blue-100);
  }
`;
