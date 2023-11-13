import { Container, Input, InputBox } from "../new-contact-style";

import Footer from "@components/footer/footer";
import { Header } from "@components/header/header";
import { Instruction } from "@components/instruction/instruction";
import { Navbar } from "@components/navbar/navbar";
import { useNavigate } from "react-router-dom";

function StepThree() {
  const navigate = useNavigate();

  return (
    <Container>
      <Navbar onClick={() => navigate("/mensagem/criar-contato/passo/2")} />
      <Header category="step" line={true} title="Passo 3" subtitle="Adicionar o número" />

      <Instruction instruction="Informe os dados do novo contato." />
      <section>
        <Input type="text" placeholder="Nome" />
        <Input type="text" placeholder="Sobrenome" />
        <InputBox>
          <Input width="small" type="text" placeholder="+55" />
          <Input type="text" placeholder="(00) 9 0000-0000" />
        </InputBox>
      </section>

      <Footer
        previousToUrl="/mensagem/criar-contato/passo/2"
        nextToUrl="/mensagem/criar-contato/passo/4"
      />
    </Container>
  );
}

export default StepThree;
