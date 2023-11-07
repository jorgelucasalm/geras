import { Button } from "@components/button/button";
import { Card, Content } from "./alert-style";
import { PiWarningOctagonBold } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

interface AlertProps {
  isOpen: boolean;
  closeModal: () => void;
}

export function Alert({ isOpen, closeModal }: AlertProps) {
  const location = useLocation();
  const { simulations } = location.state;

  const steps = [
    ["Termos e condições", "Informar número", "Validar o número", "Foto e nome"],
    ["Lista de contatos", "Informar número", "Salvar",],
  ];

  if (isOpen) {
    return (
      <Content>
        <Card>
          <h1>Atenção:</h1>
          <PiWarningOctagonBold size={32} />
          <p>Você está iniciando uma simulação.</p>
          <div>
            <Button>
              <Link
                to={"/instrucao"}
                state={{
                  steps:steps[1], 
                  url: "/mensagem/criar-contato",
                  render: false,
                }}
              >
                Entendi
              </Link>
            </Button>
            <Button category="secundary" onclick={closeModal}>
              Voltar
            </Button>
          </div>
        </Card>
      </Content>
    );
  } else {
    return null;
  }
}
