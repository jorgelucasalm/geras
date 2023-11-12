import { InputProps } from "antd";
import { Input } from "./style";

interface Props extends InputProps {}

export default function LineInput({ style, ...rest }: Props) {
  return <Input style={!style ? { flex: "1 1 0%" } : style} {...rest} />;
}
