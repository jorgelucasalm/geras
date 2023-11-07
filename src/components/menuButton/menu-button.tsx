import { Link } from "react-router-dom";
import { Content } from "./menu-button-style";

interface MenuButtonProps {
  icon?: any;
  label: string;
  url?: string;
  onclick: () => void;
}

export function MenuButton({ icon, label, url, onclick }: MenuButtonProps) {
  return (
    <Content>
      <button onClick={onclick}>{icon}</button>
      <p>{label}</p>
    </Content>
  );
}
