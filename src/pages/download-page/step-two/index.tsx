import { Button } from "@components/button/button";
import SearchInput from "@components/search-input/search-input";
import TextCard from "@components/text-card/textCard";
import { CiSearch } from "react-icons/ci";
import { FaUber, FaWhatsappSquare } from "react-icons/fa";
import { SiIfood } from "react-icons/si";
import { useLocation, useOutletContext } from "react-router-dom";
import { AppDiv, Div } from "./style";
import { useEffect, useState } from "react";
import { EndAlert } from "@components/endAlert/end-alert";
import { OutletContextType } from "../download-page";

export default function StepTwo() {
  const outletContext = useOutletContext() as OutletContextType;
  const location = useLocation();
  const pathname = location.pathname.slice(1).split("/");
  const [_, App] = pathname;
  const [openModal, setOpenModal] = useState<boolean>(false);

  function getIcon() {
    if (App === "uber") return <FaUber size={64} color="black" />;
    if (App === "whatsapp") return <FaWhatsappSquare size={64} color="green" />;
    if (App === "ifood") return <SiIfood size={64} color="red" />;
  }

  useEffect(() => {
    outletContext.setFooterFunc({
      onClickNext: (e) => {
        setOpenModal(true);
        e.preventDefault();
      },
    });
  }, [outletContext]);

  return (
    <>
      <Div>
        <TextCard style={{ marginBottom: 40, marginTop: 64 }}>
          Toque em instalar e espere terminar de baixar.
        </TextCard>
        <SearchInput
          width={296}
          height={48}
          placeholder="Buscar"
          prefix={<CiSearch />}
          value={App}
        />
        <AppDiv>
          <div>
            {getIcon()}
            <p>{App}</p>
          </div>
          <Button onClick={() => setOpenModal(true)}>Instalar</Button>
        </AppDiv>
      </Div>
      <EndAlert isOpen={openModal} closeModal={() => setOpenModal(false)} />
    </>
  );
}
