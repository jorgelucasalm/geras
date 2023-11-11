import styled from "styled-components";

export const Content = styled.div`
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;
  background-color: rgba(94, 94, 94, 0.6);
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  gap: 2rem;
  border-radius: 0.5rem;
  background-color: var(--white);

  width: 18.5rem;

  font-weight: 600;
  font-size: 1.125rem;
  color: var(--blue-600);

  svg {
    color: var(--orange-400);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
