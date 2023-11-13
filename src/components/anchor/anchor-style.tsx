import { Link } from "react-router-dom";
import styled from "styled-components";

export const AnchorLink = styled(Link)<{
  category: "primary" | "secondary";
  width?: string | number;
  height?: string | number;
}>`
  width: max-content;
  height: ${({ height }) =>
    height ? (typeof height === "number" ? `${height}px` : height) : "2rem"};
  border-radius: 2rem;
  border: 1px solid var(--blue-800);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  width: ${({ width }) => (width ? (typeof width === "number" ? `${width}px` : width) : "10rem")};
  height: ${({ height }) =>
    height ? (typeof height === "number" ? `${height}px` : height) : "2rem"};
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
          return "var(--blue-100)";
        default:
          return "var(--blue-600)";
      }
    }};
  }
`;
