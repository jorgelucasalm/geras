import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@components";
import { Container } from "./profile-style";
import Footer from "@components/footer/footer";
import { Input } from "@components/line-input/style";
import { Navbar } from "@components/navbar/navbar";
import { Div } from "./profile-style";





export default function ProfileView() {
  const navigate = useNavigate();
  const [imageUrl] = useState<string>();




  return (
    <Container>
      <Navbar onClick={() => navigate("/configuration")} />

      <img src={imageUrl} alt="avatar" style={{ width: "100%", borderRadius: "50%" }} />


      <h1 style={{ color: "var(--blue-800)" }}>Marcia</h1>
      <h2 style={{ color: "var(--blue-800)" }}>@marcia.perfil</h2>


      <section>
        <Input type="text" placeholder="Nome Completo" disabled />
        <Input type="text" placeholder="Data de nascimento" disabled />
        <Input type="text" placeholder="Email" disabled />

      </section>

      <Div>
        <Button
          category="primary"
          style={{ margin: "1.5rem auto", marginTop: 24 }}
          onClick={() => navigate("/edit-profile/")}
        >
          Alterar dados
        </Button>
      </Div>


      <Footer
        previousToUrl="/configuration"
        nextToUrl="/edit-profile"
      />
    </Container>

  );
}

