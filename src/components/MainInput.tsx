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
    border-radius: 10rem;
    border: 1px solid var(--dark-blue) !important;

    width: ${({ $width }) => (typeof $width === "number" ? `${$width}px` : $width)};
    height: ${({ $height }) => (typeof $height === "number" ? `${$height}px` : $height)};
  }

  & > span > input {
    color: var(--dark-blue);
    font-size: 1.6rem;
  }

  & .ant-input-prefix {
    margin-right: 0.8rem;
  }

  & .ant-input-prefix > svg,
  .ant-input-suffix > svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--dark-blue);
  }

  & .ant-input-suffix > svg:hover {
    cursor: pointer;
  }
`;

MainInput.Password = MainInputPassword;
