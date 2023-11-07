import { Content } from "./contact-style";

interface ContactProps {
  icon?: any;
  name: string;
}

export function Contact({ icon, name }: ContactProps) {
  return (
    <Content>
      <span><img src={icon}/></span>
      <p>{name}</p>
    </Content>
  );
}
