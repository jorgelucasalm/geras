import { Input, InputProps } from "antd";
import styled from "styled-components";
import { LuMail } from "react-icons/lu";
import { FiLock } from "react-icons/fi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface Props extends InputProps {
  width: string | number;
  height: string | number;
}

export default function MainInput({ width, height, ...rest }: Props) {
  return (
    <Main $width={width} $height={height}>
      <Input prefix={<LuMail />} {...rest} />
    </Main>
  );
}

function MainInputPassword({ width, height, ...rest }: Props) {
  return (
    <Main $width={width} $height={height}>
      <Input.Password
        prefix={<FiLock />}
        iconRender={(visible) => (visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />)}
        {...rest}
      />
    </Main>
  );
}

const Main = styled.div<{ $width: Props["width"]; $height: Props["height"] }>`
  width: max-content;

  & > span {
    border-radius: 6.25rem;
    border: 1px solid var(--blue-800) !important;

    width: ${({ $width }) => (typeof $width === "number" ? `${$width}px` : $width)};
    height: ${({ $height }) => (typeof $height === "number" ? `${$height}px` : $height)};
  }

  & > span > input {
    color: var(--blue-800);
    font-size: 1rem;
  }

  & .ant-input-prefix {
    margin-right: 0.5rem;
  }

  & .ant-input-prefix > svg,
  .ant-input-suffix > svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--blue-800);
  }

  & .ant-input-suffix > svg:hover {
    cursor: pointer;
  }
`;

MainInput.Password = MainInputPassword;
