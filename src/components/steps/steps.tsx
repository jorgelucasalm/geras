import { Navbar } from "@components/navbar/navbar";
import { Button } from "../button/button";
import { Header } from "../header/header";
import { Container, Content, Instruction } from "./steps-style";
import { Link, useLocation } from "react-router-dom";

export function Step() {
  const location = useLocation();
  const { steps, url, render } = location.state;

  return (
    <Container>
      <Navbar/>
      <Header title="Vamos começar?" subtitle="Passos" />

      <section>
        {steps.map((step: string, index: number) => {
          return (
            <Instruction key={index}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </Instruction>
          );
        })}
      </section>

      <Content>
        <Button>
          <Link to={url}>Iniciar</Link>
        </Button>

        {render && (
          <Button category={"secundary"}>
            <Link to={url}>Pular explicação</Link>
          </Button>
        )}
      </Content>
    </Container>
  );
}
