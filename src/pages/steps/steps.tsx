import { BsArrowLeftCircle } from "react-icons/bs";
import styled from "styled-components";
import Logo from "../../assets/images/primary-logo.png";
import { Button } from "../../components/button/button";
import { Header } from "../../components/header/header";
import { Container, Content, Instruction } from "./steps-style";

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
      <Nav>
        <BsArrowLeftCircle size={24} /> {/*como fazer funcionar? */}
        <img src={Logo} />
      </Nav>

      <Header title="Vamos começar?" subtitle="Passos" />

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

const Nav = styled.nav`
  min-height: 4rem;
`;
