import { Content } from "./button-style";

interface ButtonProps {
  children: string;
  category?: string;
  onclick?: () => void;
}

export function Button({ children, category, onclick }: ButtonProps) {
  return <Content category={category} onClick={onclick}>{children}</Content>;
}
