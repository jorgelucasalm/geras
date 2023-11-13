import { Input as AntdInput, InputProps } from "antd";
import styled from "styled-components";

export const Input = styled(AntdInput)<InputProps>`
  border: 1px solid black;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-radius: 0px;
  width: ${({ width }) => (typeof width === "number" ? `${width}px` : width)};
  height: ${({ height }) => (typeof height === "number" ? `${height}px` : height)};
  padding: 0 auto;
  padding-left: 24px;

  &:focus,
  input.ant-input-status-error:focus {
    box-shadow: none !important;
  }

  &::placeholder {
    color: black;
    opacity: 0.7;
  }
`;
