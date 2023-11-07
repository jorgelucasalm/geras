import { Container, NewContactButton } from "../new-contact-style";

import { Header } from "@components/header/header";
import { Navbar } from "@components/navbar/navbar";
import { BottomBar } from "@components/bottombar/bottombar";
import { Instruction } from "@components/instruction/instruction";
import { Contact } from "../../components/contact/contact";
import { GoPerson } from "react-icons/go";

import Icon1 from "../../images/picture1.png";
import Icon2 from "../../images/picture2.png";
import Icon3 from "../../images/picture3.png";
import Icon4 from "../../images/picture4.png";

const contacts = [
  {
    id: 1,
    icon: Icon1,
    name: "Adriano",
  },
  {
    id: 2,
    icon: Icon2,
    name: "Luiza",
  },
  {
    id: 3,
    icon: Icon3,
    name: "Sara",
  },
  {
    id: 4,
    icon: Icon4,
    name: "Marlena",
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
