import { Content } from "./button-style";

interface ButtonProps {
  children: any;
  category?: string;
  onClick?: () => any;
}

export function Button({ children, category, onClick }: ButtonProps) {
  return (
    <Content onClick={onClick} category={category}>
      {children}
    </Content>
  );
}
