import SearchInput from "@components/search-input/search-input";
import TextCard from "@components/text-card/textCard";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaWhatsappSquare } from "react-icons/fa";
import { Div, App } from "./style";

export default function StepTwo() {
  const [form] = useForm();
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <Div>
      <TextCard style={{ marginBottom: 40, marginTop: 64 }}>
        Toque em instalar e espere terminar de baixar.
      </TextCard>
      <SearchInput width={296} height={48} placeholder="Buscar" prefix={<CiSearch />} />
      <App>
        <FaWhatsappSquare size={32} />
        <p>Whatsapp</p>
      </App>
    </Div>
  );
}
