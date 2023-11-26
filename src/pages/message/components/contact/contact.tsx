import { Content } from "./contact-style";

interface ContactProps {
  icon?: string;
  name: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  style?: React.CSSProperties;
}

export function Contact({ icon, name, onClick, style }: ContactProps) {
  return (
    <Content onClick={onClick} style={style}>
      <span>
        <img src={icon} />
      </span>
      <p>{name}</p>
    </Content>
  );
}
