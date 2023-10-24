import Logo from "../../assets/images/primary-logo.png"
import { Container } from "./home-style";

export function Home() {
  return (
    <Container>
      <img src={Logo}/>
      <p>Geras</p>
      <button type="button">Vamos começar!</button>
    </Container>
  );
  }