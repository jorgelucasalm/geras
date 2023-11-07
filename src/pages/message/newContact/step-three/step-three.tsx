import { Container, FloatButton, Input, InputBox } from "../new-contact-style";

import { Header } from "@components/header/header";
import { Navbar } from "@components/navbar/navbar";
import { BottomBar } from "@components/bottombar/bottombar";
import { Instruction } from "@components/instruction/instruction";
import { Contact } from "../../components/contact/contact";

import { PiChatTextLight } from "react-icons/pi";

const contacts = [
  {
    id: 1,
    icon: "X",
    name: "Adriano",
  },
  {
    id: 2,
    icon: "X",
    name: "Leo",
  },
];

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

      <BottomBar />
    </Container>
  );
}

export default StepThree;
