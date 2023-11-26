import { Button } from "@components";
import TextCard from "@components/text-card/textCard";
import { useLocation, useNavigate } from "react-router-dom";
import { Div } from "./style";
import SearchInput from "@components/search-input/search-input";
import { CiSearch } from "react-icons/ci";

export default function StepOne() {
  const location = useLocation();
  const pathname = location.pathname.slice(1).split("/");
  const [messageText, App] = pathname;

  return (
    <Div>
      <SearchInput width={296} height={48} placeholder="Buscar" prefix={<CiSearch />} />
      <h3> Você procura por: {App}</h3>
      <TextCard>Aqui vão ser exibidos os resultados da sua busca.</TextCard>
    </Div>
  );
}
