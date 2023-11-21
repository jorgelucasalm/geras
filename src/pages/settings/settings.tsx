import { Header } from "@components";
import { OptionButton } from "@components/optionButton/option-button";
import { Container } from "./settings-style";
import { Navbar } from "@components/navbar/navbar";

export function Settings() {
  return (
    <Container>
      <Navbar />
      <Header category="main" title={"Configurações"} />
      <div>
        <OptionButton>Meus dados</OptionButton>
        <OptionButton>Minha senha</OptionButton>
        <OptionButton>Fale conosco</OptionButton>
        <OptionButton>Acompanhar progresso</OptionButton>
        <OptionButton>Sair</OptionButton>
        <OptionButton category="alert">Excluir minha conta</OptionButton>
      </div>
    </Container>
  );
}
