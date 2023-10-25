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
  font-size: .9rem;
  font-weight: 600;
  border: ${(props) => {
    switch (props.category) {
      case "secundary":
        return "1px solid var(--blue-800)";
      default:
        return "none";
    }
  }};

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
`;
