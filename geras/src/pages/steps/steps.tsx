import { Container, Content, Instruction } from "./steps-style";
import Logo from "../../assets/images/primary-logo.png";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Button } from "../../components/button/button";
import { Header } from "../../components/header/header";

const instructions = [
  {
    id: "1",
    text: "Aprenda a criar um e-mail",
  },
  {
    id: "2",
    text: "Entrar no GERAS",
  },
];

export function Step() {
  return (
    <Container>
      <nav>
        <BsArrowLeftCircle size={24} /> {/*como fazer funcionar? */}
        <img src={Logo} />
      </nav>

      <Header title="Vamos começar!" subtitle="Passos" />

      <section>
        {instructions.map((instruction) => {
          return (
            <Instruction key={instruction.id}>
              <span>{instruction.id}</span>
              <p>{instruction.text}</p>
            </Instruction>
          );
        })}
      </section>

      <Content>
        <Button>Iniciar</Button>
        <Button category={"secundary"}>Pular explicação</Button>
      </Content>
    </Container>
  );
}
