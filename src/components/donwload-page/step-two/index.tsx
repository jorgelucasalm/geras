import SearchInput from "@components/search-input/search-input";
import TextCard from "@components/text-card/textCard";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaWhatsappSquare, FaUber } from "react-icons/fa";
import { Div, AppDiv } from "./style";
import { useLocation } from "react-router-dom";
import { SiIfood } from "react-icons/si";
import { Button } from "@components/button/button";

export default function StepTwo() {
  const location = useLocation();
  const pathname = location.pathname.slice(1).split("/");
  const [messageText, App] = pathname;

  function getIcon() {
    if (App === "uber") return <FaUber size={64} color="black" />;
    if (App === "whatsapp") return <FaWhatsappSquare size={64} color="green" />;
    if (App === "ifood") return <SiIfood size={64} color="red" />;
  }

  return (
    <Div>
      <TextCard style={{ marginBottom: 40, marginTop: 64 }}>
        Toque em instalar e espere terminar de baixar.
      </TextCard>
      <SearchInput width={296} height={48} placeholder="Buscar" prefix={<CiSearch />} value={App} />
      <AppDiv>
        <div>
          {getIcon()}
          <p>{App}</p>
        </div>
        <Button>Instalar</Button>
      </AppDiv>
    </Div>
  );
}
