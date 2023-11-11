import { Container, NewContactButton } from "../new-contact-style";

import { Header } from "@components/header/header";
import { Navbar } from "@components/navbar/navbar";
import { BottomBar } from "@components/bottombar/bottombar";
import { GoPerson } from "react-icons/go";
import { Contact } from "@pages/message/components/contact/contact";

import Icon1 from "../../images/picture1.png";
import Icon2 from "../../images/picture2.png";
import Icon3 from "../../images/picture3.png";
import Icon4 from "../../images/picture4.png";
import { Button } from "@components/button/button";
import { useState } from "react";
import { EndAlert } from "@components/endAlert/end-alert";

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

function StepFour() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <EndAlert isOpen={openModal} closeModal={() => setOpenModal(!openModal)} />
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

        <BottomBar
          preview="/mensagem/criar-contato/passo-3"
          next=""
          onclick={() => {
            setOpenModal(true);
          }}
        />
      </Container>
    </>
  );
}

export default StepFour;
