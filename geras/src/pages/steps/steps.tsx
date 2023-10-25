import { Container, Content, Instruction } from "./steps-style";
import Logo from "../../assets/images/primary-logo.png";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Button } from "../../components/button/button";

export function Step() {
  return (
    <Container>
      <nav>
        <BsArrowLeftCircle size={24} />
        <img src={Logo} />
      </nav>

      <header>
        <h2>Vamos começar!</h2>
        <p>Passos</p>
      </header>

      <section>
        <Instruction>
          <span>1</span>
          <p>Aprenda a criar um e-mail</p>
        </Instruction>
        <Instruction>
          <span>2</span>
          <p>Entrar no GERAS</p>
        </Instruction>
      </section>

      <Content>
        <Button>Iniciar</Button>
        <Button category={"secundary"}>Pular explicação</Button>
      </Content>
    </Container>
  );
}
