import { Button } from "./button-style";

interface ButtonProps {
  children: string;
}

export function PrimaryButton({children}:ButtonProps) {
  return (
    <Button>{children}</Button>
  )
}