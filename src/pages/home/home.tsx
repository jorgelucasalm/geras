import { Link } from "react-router-dom";
import Logo from "../../assets/images/primary-logo.png";
import { Button } from "../../components/button/button";
import { Container } from "./home-style";
import StepsData from "./steps.json"

export function Home() {
  const steps = StepsData;

  return (
    <Container>
      <img src={Logo} />
      <p>Geras</p>
      <Button>
        <Link
          to={"/instrucao"}
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
