import styled from "styled-components";

interface InputProps {
  width?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-height: 21.875rem;
    overflow-y: auto;
  }

  footer {
    margin-top: auto;
  }

  > p {
    align-self: baseline;
    padding-left: 2.125rem;
    margin-bottom: 0.75rem;
  }
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
    transition: all 0.5s ease-in-out;

    &:hover {
      background-color: var(--blue-600);
      color: var(--white);
      transition: all 0.5s ease-in-out;
    }
  }
`;

export const NewContactButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  min-width: 18rem;
  padding: 0.5rem;
  gap: 1rem;
  margin-bottom: 1rem;

  border: none;
  background-color: transparent;

  span {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--blue-800);
    background-color: var(--blue-100);
  }

  p {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
  }

  &:hover {
    background-color: var(--blue-100);
  }
`;

export const Input = styled.input<InputProps>`
  display: flex;
  padding: 0rem 1rem 0.5rem;
  align-items: center;
  border: none;
  border-bottom: 1px solid var(--black-900);
  outline: none;
  font-size: 1rem;
  width: ${(props) => {
    return props.width === "small" ? "25%" : "100%";
  }};
  max-width: 18.5rem;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  max-width: 18rem;
`;
