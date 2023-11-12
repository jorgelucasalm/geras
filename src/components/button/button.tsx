import { Content } from "./button-style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  category?: "primary" | "secondary";
  width?: string | number;
  height?: string | number;
}

export function Button({ children, category, ...rest }: ButtonProps) {
  return (
    <Content category={category} {...rest}>
      {children}
    </Content>
  );
}
