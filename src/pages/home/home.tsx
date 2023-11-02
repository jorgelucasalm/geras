import { Link } from "react-router-dom";
import Logo from "../../assets/images/primary-logo.png";
import { Button } from "../../components/button/button";
import { Container } from "./home-style";

export function Home() {
  const steps = [
    "Aprenda a criar um e-mail", 
    "Entrar no GERAS"
  ];

  return (
    <Container>
      <img src={Logo} />
      <p>Geras</p>
      <Button>
        <Link
          to={"/step-1"}
          state={{
            steps,
            url: "/login",
            render: true,
          }}
        >
          Vamos começar!
        </Link>
      </Button>
    </Container>
  );
}
