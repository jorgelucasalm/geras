import { Header } from "@components";
import { OptionButton } from "@components/optionButton/option-button";
import { Container } from "./support-style";
import { Navbar } from "@components/navbar/navbar";
import { useNavigate } from "react-router-dom";

export function Support() {
  const navigate = useNavigate();
  return (
    <Container>
      <Navbar onClick={() => navigate(-1)} />
      <Header category="main" title={"Dúvidas"} subtitle={"Escolha uma das opções"} />
      <div>
        <OptionButton to={""}>Histórico de Dúvidas</OptionButton>
        <OptionButton to={""}>Nova Pergunta</OptionButton>
      </div>
    </Container>
  );
}
