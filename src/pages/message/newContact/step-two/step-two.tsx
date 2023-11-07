import { Container, NewContactButton } from "../new-contact-style";

import { Header } from "@components/header/header";
import { Navbar } from "@components/navbar/navbar";
import { BottomBar } from "@components/bottombar/bottombar";
import { Instruction } from "@components/instruction/instruction";
import { Contact } from "../../components/contact/contact";
import { GoPerson } from "react-icons/go";

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

function StepTwo() {
  return (
    <Container>
      <Navbar />
      <Header line={true} title="Passo 2" subtitle="Abrindo a lista de contatos salvos." />

      <Instruction instruction="Selecione o contato desejado ou crie um novo contato." />

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

export default StepTwo;
