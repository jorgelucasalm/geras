import { Header } from "@components";
import { OptionButton } from "@components/optionButton/option-button";
import { Container } from "./support-style";
import { Navbar } from "@components/navbar/navbar";

export function Support() {
  return (
    <Container>
      <Navbar />
      <Header  category="main" title={"Dúvidas"} subtitle={"Escolha uma das opções"} />
      <div>
        <OptionButton to={""}>Histórico de Dúvidas</OptionButton>
        <OptionButton to={""}>Nova Pergunta</OptionButton>
      </div>
    </Container>
  );
}
