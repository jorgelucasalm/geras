import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { Button } from "@components";
import { Container, IconStyle } from "./profile-style";
import Footer from "@components/footer/footer";
import { Input } from "@components/line-input/style";
import { Navbar } from "@components/navbar/navbar";
import { Div } from "./profile-style";
import IconFemale1 from "@pages/message/images/picture2.png";
import MainInput from "@components/main-input/MainInput";





export default function ProfileView() {
  const navigate = useNavigate();

  return (
    <Container>
      <Navbar onClick={() => navigate("/configuration")} />

      <IconStyle src={IconFemale1} alt="avatar" />


      <h1 style={{ color: "var(--blue-800)" }}>Marcia</h1>
      <h2 style={{ color: "var(--blue-800)" }}>@marcia.perfil</h2>


      <section>
        <MainInput
          width={296}
          height={48}
          type="text"
          // prefix={<AiOutlineUser />}
          placeholder="Nome completo"
          disabled
        />
        <MainInput
          width={296}
          height={48}
          // prefix={<Date/>}
          placeholder="01/01/2001"
          disabled
        />
        <MainInput
          width={296}
          height={48}
          // prefix={<LuMail />}
          placeholder="example@gmail.com"
          disabled
        />

      </section>

      <Div>
        <Button
          category="primary"
          style={{ margin: "1.5rem auto", marginTop: 24 }}
          onClick={() => navigate("/editar-perfil")}
        >
          Alterar dados
        </Button>
      </Div>


      <Footer
        previousToUrl="/configuration"
        nextToUrl="/editar-perfil"
      />
    </Container>

  );
}

