import { MainSelect } from "@components/select/select";
import TextCard from "@components/text-card/textCard";
import { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { OutletContextType } from "../download-page";
import { Div } from "./style";

export default function StepOne() {
  const outletContext = useOutletContext() as OutletContextType;
  const location = useLocation();
  const pathname = location.pathname.slice(1).split("/");
  const [messageText, App, stepText, stepValueText] = pathname;
  const navigate = useNavigate();

  useEffect(() => {
    outletContext.setFooterFunc({
      onClickNext: () => {},
    });
  }, [outletContext]);

  return (
    <Div>
      <MainSelect
        placeholder={"Busca"}
        isSearch={true}
        options={[
          { value: "uber", label: "Uber" },
          { value: "whatsapp", label: "Whatsapp" },
          { value: "ifood", label: "Ifood" },
        ]}
        prefixIcon={<CiSearch size={24} />}
        onChange={(e: string) => {
          e == App && navigate(`/${messageText}/${App}/${stepText}/${Number(stepValueText) + 1}`);
        }}
      />
      <h3> Você procura por: {App}</h3>
      <TextCard>Aqui vão ser exibidos os resultados da sua busca.</TextCard>
    </Div>
  );
}
