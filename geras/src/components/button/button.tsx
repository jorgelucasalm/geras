import { Content } from "./button-style";

interface ButtonProps {
  children: string;
  category?: string
}

export function Button({children, category}:ButtonProps) {
  return (
    <Content category={category}>{children}</Content>
  )
}