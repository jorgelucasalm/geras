import styled from "styled-components";

export const Content = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  line-height: 1.5rem;
  gap: 1rem;

  & > p {
    color: var(--blue-800);
    text-align: center;
  }
`;
