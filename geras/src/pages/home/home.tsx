import { Link } from "react-router-dom";
import Logo from "../../assets/images/primary-logo.png";
import { Button } from "../../components/button/button";
import { Container } from "./home-style";

export function Home() {
  return (
    <Container>
      <img src={Logo} />
      <p>Geras</p>
      <Button>
        <Link to={"/step-1"}>Vamos começar!</Link>
        </Button>
    </Container>
  );
}
