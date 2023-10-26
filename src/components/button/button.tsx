import { Content } from "./button-style";

interface ButtonProps {
  children: any;
  category?: string;
}

export function Button({ children, category }: ButtonProps) {
  return <Content category={category}>{children}</Content>;
}
