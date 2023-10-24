import Logo from "../../assets/images/primary-logo.png"
import { PrimaryButton } from "../../components/primary-button/button";
import { Container } from "./home-style";

export function Home() {
  return (
    <Container>
      <img src={Logo}/>
      <p>Geras</p>
      <PrimaryButton>Vamos começar!</PrimaryButton>
    </Container>
  );
  }