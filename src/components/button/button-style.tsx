import styled from "styled-components";

interface ButtonProps {
  category?: string;
}

export const Content = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  padding: 0.4rem 1rem;
  width: 10rem;
  border-radius: 2rem;
  font-size: 1rem;
  border: 1px solid var(--blue-800);
  cursor: pointer;

  color: ${(props) => {
    switch (props.category) {
      case "secundary":
        return "var(--blue-800)";
      default:
        return "var(--white)";
    }
  }};

  background: ${(props) => {
    switch (props.category) {
      case "secundary":
        return "var(--white)";
      default:
        return "var(--blue-800)";
    }
  }};

  &:hover {
    background: ${(props) => {
      switch (props.category) {
        case "secundary":
          return "var(--blue-100)";
        default:
          return "var(--blue-600)";
      }
    }};
  }
`;
