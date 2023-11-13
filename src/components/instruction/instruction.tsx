import { Content } from "./instruction-style";

interface IntructionProps {
  instruction: string;
}

export function Instruction({instruction}:IntructionProps) {
  return <Content>{instruction}</Content>;
}
