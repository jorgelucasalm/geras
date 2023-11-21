import { Content } from "./option-button-style";

interface OptionButtonProps {
  children: string;
  category?: string | undefined;
}

export function OptionButton({children, category}:OptionButtonProps) {
  return (
    <Content category={category}>
      {children}
    </Content>
  );
}
