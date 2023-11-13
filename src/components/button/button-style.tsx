import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  category?: "primary" | "secondary";
  width?: string | number;
  height?: string | number;
}

export const Content = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 1rem;
  width: ${({ width }) => (width ? (typeof width === "number" ? `${width}px` : width) : "10rem")};
  height: ${({ height }) =>
    height ? (typeof height === "number" ? `${height}px` : height) : "2rem"};
  border-radius: 2rem;
  font-size: 1rem;
  border: 1px solid var(--blue-800);
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  color: ${(props) => {
    switch (props.category) {
      case "secondary":
        return "var(--blue-800)";
      default:
        return "var(--white)";
    }
  }};

  background: ${(props) => {
    switch (props.category) {
      case "secondary":
        return "var(--white)";
      default:
        return "var(--blue-800)";
    }
  }};

  &:hover {
    background: ${(props) => {
      switch (props.category) {
        case "secondary":
          return !props.disabled ? "var(--blue-100)" : "var(--white)";
        default:
          return !props.disabled ? "var(--blue-600)" : "var(--blue-800)";
      }
    }};
  }
`;
