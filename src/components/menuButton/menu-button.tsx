import { Content } from "./menu-button-style";

interface MenuButtonProps {
  icon?: any;
  label: string;
}

export function MenuButton({icon, label}: MenuButtonProps) {
  return (
    <Content>
      <button>{icon}</button>
      <p>{label}</p>
    </Content>
  );
}
