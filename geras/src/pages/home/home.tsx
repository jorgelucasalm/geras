import Logo from "../../assets/images/primary-logo.png";
import { Button } from "../../components/button/button";
import { Container } from "./home-style";

export function Home() {
  return (
    <Container>
      <img src={Logo} />
      <p>Geras</p>
      <Button>Vamos começar!</Button>
    </Container>
  );
}
