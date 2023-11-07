import { Container, FloatButton, Input, InputBox, NewContactButton } from "../new-contact-style";

import { Header } from "@components/header/header";
import { Navbar } from "@components/navbar/navbar";
import { BottomBar } from "@components/bottombar/bottombar";
import { Instruction } from "@components/instruction/instruction";
import { GoPerson } from "react-icons/go";
import { Contact } from "@pages/message/components/contact/contact";

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

function StepFour() {
  return (
    <Container>
      <Navbar />
      <Header line={true} title="Parabéns" subtitle="Você adicionou mais um contato!" />

      <NewContactButton>
        <span>
          <GoPerson size={24} />
        </span>
        <p>Novo contato</p>
      </NewContactButton>

      <section>
        <p>Contatos salvos</p>
        {contacts.map((contact) => {
          return <Contact key={contact.id} icon={contact.icon} name={contact.name} />;
        })}
      </section>

      <BottomBar />
    </Container>
  );
}

export default StepFour;
