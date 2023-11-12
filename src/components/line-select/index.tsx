import { Input, InputProps } from "antd";
import { DivInput } from "./style";

interface Props extends InputProps {}

export function LineSelect({ style, ...rest }: Props) {
  return (
    <DivInput>
      <Input style={!style ? { flex: "1 1 0%" } : style} {...rest} />
    </DivInput>
  );
}


