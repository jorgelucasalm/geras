import { Input, InputProps } from "antd";
import { MainWithPrefix, MainWithoutPrefix } from "./search-input-style";

interface Props extends InputProps {
  width: string | number;
  height: string | number;
}

export default function SearchInput({ width, height, ...rest }: Props) {
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
