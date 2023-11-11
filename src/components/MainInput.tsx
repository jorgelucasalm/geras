import { Input, InputProps } from "antd";
import styled from "styled-components";
import { CiCalendarDate } from "react-icons/ci";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineCalendar } from "react-icons/ai";
import { IconType } from "react-icons";

interface Props extends InputProps {
  width: string | number;
  height: string | number;
  prefix?: React.ReactNode;
}

export default function MainInput({ width, height, ...rest }: Props) {
  return (
    <Main $width={width} $height={height}>
      <Input {...rest} />
    </Main>
  );
}

function MainInputPassword({ width, height, ...rest }: Props) {
  return (
    <Main $width={width} $height={height}>
      <Input.Password
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
