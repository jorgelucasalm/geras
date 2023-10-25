import { Content } from "./header-style";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export function Header({title, subtitle}:HeaderProps) {
  return (
    <Content>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </Content>
  );
}
