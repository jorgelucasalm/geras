import { Link } from "react-router-dom";
import { Content } from "./menu-button-style";

interface MenuButtonProps {
  icon?: any;
  label: string;
  url: string;
}

export function MenuButton({ icon, label, url }: MenuButtonProps) {
  return (
    <Content>
      <Link to={url}>
        <button>{icon}</button>
      </Link>
      <p>{label}</p>
    </Content>
  );
}
