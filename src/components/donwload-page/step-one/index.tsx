import { Button } from "@components";
import TextCard from "@components/text-card/textCard";
import { useLocation, useNavigate } from "react-router-dom";
import { Div } from "./style";
import SearchInput from "@components/search-input/search-input";
import { CiSearch } from "react-icons/ci";
import { MainSelect } from "@components/select/select";

export default function StepOne() {
  const location = useLocation();
  const pathname = location.pathname.slice(1).split("/");
  const [messageText, App, stepText, stepValueText] = pathname;
  const navigate = useNavigate();

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
