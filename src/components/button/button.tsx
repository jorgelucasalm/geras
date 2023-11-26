import { Content } from "./button-style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  category?: "primary" | "secondary";
  onClick?: () => any;
  width?: string | number;
  height?: string | number;
}

export function Button({ children, category, onClick, ...rest }: ButtonProps) {
  return (
    <Content onClick={onClick} category={category}  {...rest}>
      {children}
    </Content>
  );
}
