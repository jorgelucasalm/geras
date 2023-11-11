import { Container, Input, InputBox } from "../new-contact-style";

import { Header } from "@components/header/header";
import { Navbar } from "@components/navbar/navbar";
import { BottomBar } from "@components/bottombar/bottombar";
import { Instruction } from "@components/instruction/instruction";

function StepThree() {
  return (
    <Container>
      <Navbar />
      <Header line={true} title="Passo 3" subtitle="Adicionar o número" />

      <Instruction instruction="Informe os dados do novo contato." />
      <section>
        <Input type="text" placeholder="Nome" />
        <Input type="text" placeholder="Sobrenome" />
        <InputBox>
          <Input width="small" type="text" placeholder="+55" />
          <Input type="text" placeholder="(00) 9 0000-0000" />
        </InputBox>
      </section>

      <BottomBar preview="/mensagem/criar-contato/passo-2" next="/mensagem/criar-contato/passo-4" />
    </Container>
  );
}

export default StepThree;
