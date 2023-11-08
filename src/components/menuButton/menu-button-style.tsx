import styled from "styled-components";

interface ContenteProps {
  color?: string;
}

export const Content = styled.div<ContenteProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  button {
    width: 8rem;
    height: 8rem;
    border: none;
    border-radius: 100%;
    transition: all 0.4s ease-in-out;

    background-color: ${(props) => {
      switch (props.color) {
        case "pink":
          return "var(--pink-200)";
        case "orange":
          return "var(--orange-200)";
        case "green":
          return "var(--green-200)";
        default:
          return "var(--blue-100)";
      }
    }};

    &:hover {
      transition: all 0.4s ease-in-out;
      border: 40px solid
        ${(props) => {
          switch (props.color) {
            case "pink":
              return "var(--pink-600)";
            case "orange":
              return "var(--orange-800)";
            case "green":
              return "var(--green-400)";
            default:
              return "var(--blue-400)";
          }
        }};
      background-color: ${(props) => {
        switch (props.color) {
          case "pink":
            return "var(--pink-600)";
          case "orange":
            return "var(--orange-800)";
          case "green":
            return "var(--green-400)";
          default:
            return "var(--blue-400)";
        }
      }};

      svg {
        color: var(--white);
      }
    }
  }

  p {
    text-align: center;
    line-height: 1.125rem;
    max-width: 8rem;
  }

  svg {
    color: var(--black-900);
  }
`;
