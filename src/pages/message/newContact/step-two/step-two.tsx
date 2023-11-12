import { Container, NewContactButton } from "../new-contact-style";

import { Header } from "@components/header/header";
import { Instruction } from "@components/instruction/instruction";
import { Navbar } from "@components/navbar/navbar";
import { GoPerson } from "react-icons/go";
import { Contact } from "../../components/contact/contact";

import Footer from "@components/footer/footer";
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

function StepTwo() {
  const navigate = useNavigate();

  return (
    <Container>
      <Navbar onClick={() => navigate("/mensagem/criar-contato/passo/1")} />
      <Header
        category="step"
        line={true}
        title="Passo 2"
        subtitle="Abrindo a lista de contatos salvos."
      />

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
      <Footer
        previousToUrl="/mensagem/criar-contato/passo/1"
        nextToUrl="/mensagem/criar-contato/passo/3"
      />
    </Container>
  );
}

export default StepTwo;
