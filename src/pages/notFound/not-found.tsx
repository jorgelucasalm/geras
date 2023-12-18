import { Button } from "@components";
import Logo from "../../assets/images/primary-logo.png";
import { Container } from "./not-found-style";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <Container>
      <img src={Logo} />
      <h1>Ops! Houve um erro.</h1>
      <p>Não encontramos esta página.</p>
      <Link to={"/"}>
        <Button>Tela inicial</Button>
      </Link>
    </Container>
  );
}
