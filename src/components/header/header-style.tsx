import styled from "styled-components";

interface HeaderProps {
  line?: boolean;
}

export const Content = styled.header<HeaderProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  line-height: 1.5rem;
  gap: 1rem;
  width: 100%;

  border-top: ${(props) => {
    return props.line === true ? "4px solid var(--orange-400)" : "none";
  }};

  & > p {
    color: var(--blue-800);
    text-align: center;
  }
`;

export const StepContent = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  gap: 1rem;

  > h2 {
    color: var(--blue-600);
  }

  > h2,
  p {
    font-weight: 400;
  }
`;
