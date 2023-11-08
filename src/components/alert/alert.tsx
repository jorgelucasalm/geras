import { Button } from "@components/button/button";
import { Card, Content } from "./alert-style";
import { PiWarningOctagonBold } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { Key } from "react";
import StepsData from "./steps.json"

interface AlertProps {
  isOpen: boolean;
  closeModal: () => void;
  moduleId: Key;
  simulationId: Key;
  index: number;
}

export function Alert({ isOpen, closeModal, moduleId, simulationId, index }: AlertProps) {

  const steps = StepsData;

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
                  steps: steps[index][Number(moduleId) - 1].instrucions,
                  url: steps[index][Number(moduleId) - 1].url,
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
