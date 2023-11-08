import { PiConfettiBold } from "react-icons/pi";
import { Card, Content } from "./end-alert-style";
import { Button } from "@components/button/button";
import { Link } from "react-router-dom";

interface EndAlertProps {
  isOpen: boolean;
  closeModal: () => void;
}

export function EndAlert({ isOpen, closeModal }: EndAlertProps) {
  if (isOpen) {
    return (
      <Content>
        <Card>
          <h1>Simulação concluída!</h1>
          <PiConfettiBold size={32} />
          <p>Vá para a próxima seção!</p>
          <div>
            <Button onclick={closeModal}>
              <Link to={"/home"}>Tela Inicial</Link>
            </Button>
          </div>
        </Card>
      </Content>
    );
  } else {
    return null;
  }
}
