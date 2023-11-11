import { Content } from "./header-style";

interface HeaderProps {
  line?: boolean,
  title: string;
  subtitle: string;
}

export function Header({ line,title, subtitle }: HeaderProps) {
  return (
    <Content line={line}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </Content>
  );
}
