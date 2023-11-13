import { Container, FloatButton } from "../new-contact-style";

import { Header } from "@components/header/header";
import { Navbar } from "@components/navbar/navbar";
import { Instruction } from "@components/instruction/instruction";
import { Contact } from "../../components/contact/contact";

import { PiChatTextLight } from "react-icons/pi";

import Icon1 from "../../images/picture1.png";
import Icon2 from "../../images/picture2.png";
import Icon3 from "../../images/picture3.png";
import Icon4 from "../../images/picture4.png";
import { useNavigate } from "react-router-dom";
import Footer from "@components/footer/footer";

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

function StepOne() {
  const navigate = useNavigate();

  return (
    <Container>
      <Navbar onClick={() => navigate("/mensagem/criar-contato")} />
      <Header category="step" line={true} title="Passo 1" subtitle="Lista de contatos recentes" />

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

      <Footer previousToUrl="/mensagem/criar-contato" nextToUrl="/mensagem/criar-contato/passo/2" />
    </Container>
  );
}

export default StepOne;
