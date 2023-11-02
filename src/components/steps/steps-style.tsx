import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-height: 4rem;

    box-shadow: 0px 4px 4px 0px #00000019;
    background: var(--blue-100);
    width: 100%;
    padding: 0.5rem 0;

    img {
      width: 1.5rem;
      margin: 0 2rem;
    }
    svg {
      margin: 0 2rem;
    }
  }
`;

export const Instruction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 18rem;

  font-weight: 600;
  color: var(--blue-600);

  span {
    border: 2px solid var(--blue-600);
    border-radius: 5rem;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-size: 1.125rem;
    color: var(--blue-800);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
