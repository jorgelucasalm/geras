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
    background-color: ${({ $type }) => ($type === "primary" ? "var(--dark-blue)" : "#fff")};
    border: 1px solid var(--dark-blue) !important;
    border-radius: 10rem;
    color: ${({ $type }) => ($type === "primary" ? "#fff" : "var(--dark-blue)")} !important;
    font-size: 1.6rem;
    font-weight: bold;

    width: ${({ $width }) => (typeof $width === "number" ? `${$width}px` : $width)};
    height: ${({ $height }) => (typeof $height === "number" ? `${$height}px` : $height)};
  }
`;
