import { Content } from "./menu-button-style";

interface MenuButtonProps {
  color?: string;
  icon?: any;
  label: string;
  onclick?: () => void;
  index?: string;
}

export function MenuButton({ color, icon, label, onclick }: MenuButtonProps) {
  return (
    <Content color={color}>
      <button onClick={onclick}>{icon}</button>
      <p>{label}</p>
    </Content>
  );
}
