import { Container, FloatButton } from "../new-contact-style";

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

function StepOne() {
  return (
    <Container>
      <Navbar />
      <Header line={true} title="Passo 1" subtitle="Lista de contatos recentes" />

      <Instruction instruction="Acesse sua lista de contatos para iniciar uma nova conversa." />
      <section>
        {contacts.map((contact) => {
          return <Contact key={contact.id} icon={contact.icon} name={contact.name} />;
        })}
      </section>

      <FloatButton>
        <button>
          <PiChatTextLight size={24} />
        </button>
      </FloatButton>

      <BottomBar />
    </Container>
  );
}

export default StepOne;
