import { Input, InputProps } from "antd";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MainWithPrefix, MainWithoutPrefix } from "./MainInput-style";

interface Props extends InputProps {
  width: string | number;
  height: string | number;
}

export default function MainInput({ width, height, ...rest }: Props) {
  return rest.prefix !== undefined ? (
    <MainWithPrefix $width={width} $height={height}>
      <Input {...rest} />
    </MainWithPrefix>
  ) : (
    <MainWithoutPrefix $width={width} $height={height}>
      <Input {...rest} />
    </MainWithoutPrefix>
  );
}

function MainInputPassword({ width, height, ...rest }: Props) {
  return rest.prefix !== undefined ? (
    <MainWithPrefix $width={width} $height={height}>
      <Input.Password
        prefix={rest.prefix}
        iconRender={(visible) => (visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />)}
        {...rest}
      />
    </MainWithPrefix>
  ) : (
    <MainWithoutPrefix $width={width} $height={height}>
      <Input.Password
        prefix={rest.prefix}
        iconRender={(visible) => (visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />)}
        {...rest}
      />
    </MainWithoutPrefix>
  );
}

MainInput.Password = MainInputPassword;
