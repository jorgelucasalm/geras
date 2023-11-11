import styled from "styled-components";

export const Content = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 90px;
  background-color: var(--white);
  box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.1);

  button {
    width: 8rem;
  }
`;