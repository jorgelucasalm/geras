import styled from "styled-components";

interface ContentProps {
  category: string;
}

export const Content = styled.button<ContentProps>`
  display: flex;
  width: 100%;
  min-width: 15rem;
  padding: .8rem 1.5rem;
  align-items: center;

  font-size: 1.125rem;
  font-style: normal;
  line-height: 1.125rem;
  border-radius: 6.25rem;

  color: ${(props) => {
    switch (props.category) {
      case "alert":
        return "var(--red-500)";
      default:
        return "var(--blue-800)";
    }
  }};

  border: 1px solid
    ${(props) => {
      switch (props.category) {
        case "alert":
          return "var(--red-500)";
        default:
          return "var(--blue-800)";
      }
    }};
  background-color: ${(props) => {
    switch (props.category) {
      case "alert":
        return "var(--red-100)";
      default:
        return "var(--white)";
    }
  }};

  &:hover {
    background-color: ${(props) => {
      switch (props.category) {
        case "alert":
          return "var(--whiteValeu)";
        default:
          return "var(--blue-100)";
      }
    }};
  }
`;
