import { Button, ButtonProps } from "antd";
import { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props extends PropsWithChildren, ButtonProps {
  buttonType: "primary" | "secondary";
  width: string | number;
  height: string | number;
}

export default function MainButton({ buttonType, width, height, style, children, ...rest }: Props) {
  return (
    <Main $type={buttonType} $width={width} $height={height} style={style}>
      <Button {...rest}>{children}</Button>
    </Main>
  );
}

const Main = styled.div<{
  $type: Props["buttonType"];
  $width: Props["width"];
  $height: Props["height"];
}>`
  width: max-content;

  & > button {
    background-color: ${({ $type }) => ($type === "primary" ? "var(--blue-800)" : "#fff")};
    border: 1px solid var(--blue-800) !important;
    border-radius: 6.25rem;
    color: ${({ $type }) => ($type === "primary" ? "#fff" : "var(--blue-800)")} !important;
    font-size: 1rem;
    font-family: "Trebuchet MS", sans-serif;

    width: ${({ $width }) => (typeof $width === "number" ? `${$width}px` : $width)};
    height: ${({ $height }) => (typeof $height === "number" ? `${$height}px` : $height)};

    &:hover {
      background-color: ${({ $type }) =>
        $type === "primary" ? "var(--blue-600)" : "var(--blue-100)"};
    }
  }
`;
