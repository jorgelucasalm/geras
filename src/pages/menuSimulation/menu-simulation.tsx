import { Header } from "@components/header/header";
import { Navbar } from "@components/navbar/navbar";
import { Container, FloatButton } from "./menu-simulation-style";
import { MenuButton } from "@components/menuButton/menu-button";
import { useLocation } from "react-router-dom";
import Icon from "@assets/images/floatbutton.svg";
import { Key } from "react";

export function Simulation() {
  const location = useLocation();
  const { title, subtitle, messages } = location.state;
  console.log(messages)

  return (
    <Container>
      <Navbar />
      <Header title={title} subtitle={subtitle} />

      <section>
        {messages.map((message: { id: Key; icon: string; label: string }) => {
          return <MenuButton key={message.id} icon={message.icon} label={message.label} />;
        })}
      </section>

      <FloatButton>
        <img src={Icon} />
      </FloatButton>
    </Container>
  );
}