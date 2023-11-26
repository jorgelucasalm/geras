import { InputProps } from "antd";
import styled from "styled-components";

interface Props extends InputProps {
  width: string | number;
  height: string | number;
}

export const MainWithPrefix = styled.div<{ $width: Props["width"]; $height: Props["height"] }>`
  width: max-content;

  > span {
    border-radius: 6.25rem;
    border: 1px solid var(--blue-800) !important;

    width: ${({ $width }) => (typeof $width === "number" ? `${$width}px` : $width)};
    height: ${({ $height }) => (typeof $height === "number" ? `${$height}px` : $height)};
  }

  > span > input {
    color: var(--blue-800);
    font-size: 1rem;

    ::placeholder {
      color: var(--blue-800);
      opacity: 80;
    }
  }

  .ant-input-prefix {
    margin-right: 0.5rem;
  }

  .ant-input-prefix > svg,
  .ant-input-suffix > svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--blue-800);
  }

  .ant-input-suffix > svg:hover {
    cursor: pointer;
  }
`;

export const MainWithoutPrefix = styled.div<{ $width: Props["width"]; $height: Props["height"] }>`
  width: max-content;

  > input {
    border-radius: 6.25rem;
    border: 1px solid var(--blue-800) !important;

    width: ${({ $width }) => (typeof $width === "number" ? `${$width}px` : $width)};
    height: ${({ $height }) => (typeof $height === "number" ? `${$height}px` : $height)};
    color: var(--blue-800);
    font-size: 1rem;

    &::placeholder {
      color: var(--blue-800);
      opacity: 0.8;
    }
  }
`;
