import { Button } from "@components";
import TextCard from "@components/text-card/textCard";
import { useNavigate } from "react-router-dom";
import { Div } from "./style";

export default function StepOne() {
  const navigate = useNavigate();

  return (
    <Div>
      <TextCard>
        Para iniciar a criação de conta é necessário concordar com os termos do aplicativo.
      </TextCard>

      <Button category="primary" onClick={() => navigate("/mensagem/criar-conta/passo/2")}>
        Concordar
      </Button>
    </Div>
  );
}
