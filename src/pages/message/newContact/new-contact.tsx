import { Container, FloatButton } from "./new-contact-style";

import { Header } from "@components/header/header";
import { Navbar } from "@components/navbar/navbar";
import { BottomBar } from "@components/bottombar/bottombar";
import { Instruction } from "@components/instruction/instruction";
import { Contact } from "../components/contact/contact";

const contacts = [
  {
    id: 1,
    icon: "X",
    name: "teste",
  },
  {
    id: 2,
    icon: "X",
    name: "teste",
  },
];

export function NewContact() {
  return (
    <Container>
      <Navbar />
      <Header line={true} title="Passo 1" subtitle="Lista de contatos recentes" />

      <Instruction instruction="Teste" />
      <section>
        {contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              icon={contact.icon}
              name={contact.name}
            />
          );
        })}
      </section>

      <FloatButton>
        <button>x</button>
      </FloatButton>

      <BottomBar />
    </Container>
  );
}
