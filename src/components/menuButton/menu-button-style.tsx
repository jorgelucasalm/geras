import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  button {
    width: 8rem;
    height: 8rem;
    border: none;
    border-radius: 100%;
    background-color: var(--blue-100);
  }
  p {
    text-align: center;
    line-height: 1.125rem;
    max-width: 8rem;
  }
`;
