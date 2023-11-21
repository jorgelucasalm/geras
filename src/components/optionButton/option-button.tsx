import { Link } from "react-router-dom";
import { Content } from "./option-button-style";

interface OptionButtonProps {
  children: string;
  category?: string;
  to: string;
}

export function OptionButton({children, category, to}:OptionButtonProps) {
  return (
    <Content category={category}>
      <Link to={to}>{children}</Link>
    </Content>
  );
}
