import styled from "styled-components";

const NewContactButton = styled.button`
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

export default NewContactButton;
