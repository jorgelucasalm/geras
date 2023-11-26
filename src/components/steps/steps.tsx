import Anchor from "@components/anchor/anchor";
import { HeaderMenu } from "@components/header-menu/headerMenu";
import { Header } from "../header/header";
import { Container, Content, Instruction } from "./steps-style";

type Props = {
  steps: string[];
  url: string;
} & ({ render: false } | { render: true; renderUrl: string });

export function Step(props: Props) {
  return (
    <Container>
      <HeaderMenu backButtonUrl="/" />

      <Header category="main" title="Vamos começar?" subtitle="Passos" />

      <section>
        {props.steps.map((step, index) => {
          return (
            <Instruction key={index}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </Instruction>
          );
        })}
      </section>

      <Content>
        <Anchor category="primary" to={props.url}>
          Iniciar
        </Anchor>

        {props.render && (
          <Anchor category="secondary" to={props.renderUrl}>
            Pular explicação
          </Anchor>
        )}
      </Content>
    </Container>
  );
}
