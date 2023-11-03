import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Contact = styled.div`
  
`;

export const FloatButton = styled.div`
  width: 18.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    border-radius: 0.5rem;
    background: var(--blue-100);
  }
`;
