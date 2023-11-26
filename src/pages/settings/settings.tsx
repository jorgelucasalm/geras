import { Header } from "@components";
import { OptionButton } from "@components/optionButton/option-button";
import { Container } from "./settings-style";
import { Navbar } from "@components/navbar/navbar";

export function Settings() {
  return (
    <Container>
      <Navbar />
      <Header category="main" title={"Configurações"} subtitle={"Escolha uma das opções"} />
      <div>
        <OptionButton to={"/perfil"}>Meus dados</OptionButton>
        <OptionButton to={""}>Minha senha</OptionButton>
        <OptionButton to={"/suporte"}>Fale conosco</OptionButton>
        <OptionButton to={""}>Acompanhar progresso</OptionButton>
        <OptionButton to={""}>Sair</OptionButton>
        <OptionButton to={""} category="alert">Excluir minha conta</OptionButton>
      </div>
    </Container>
  );
}
