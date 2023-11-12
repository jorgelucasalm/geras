import { Container, NewContactButton } from "../new-contact-style";

import { Header } from "@components/header/header";
import { Navbar } from "@components/navbar/navbar";
import { Contact } from "@pages/message/components/contact/contact";
import { GoPerson } from "react-icons/go";

import { EndAlert } from "@components/endAlert/end-alert";
import Footer from "@components/footer/footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

function StepFour() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <EndAlert isOpen={openModal} closeModal={() => setOpenModal(!openModal)} />
      <Container>
        <Navbar onClick={() => navigate("/mensagem/criar-contato/passo/3")} />
        <Header
          category="step"
          line={true}
          title="Parabéns"
          subtitle="Você adicionou mais um contato!"
        />

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

        <Footer
          previousToUrl="/mensagem/criar-contato/passo/3"
          nextToUrl=""
          onClickNext={() => {
            setOpenModal(true);
          }}
        />
      </Container>
    </>
  );
}

export default StepFour;
