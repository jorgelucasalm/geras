import { Button } from "@components/button/button";
import { Card, Content } from "./start-alert-style";
import { PiWarningOctagonBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Key } from "react";
import StepsData from "./steps.json";

interface StartAlertProps {
  isOpen: boolean;
  closeModal: () => void;
  moduleId: Key;
  index: number;
}

export function StartAlert({ isOpen, closeModal, moduleId, index }: StartAlertProps) {
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
                to={steps[index][Number(moduleId) - 1].url}
                state={{
                  steps: steps[index][Number(moduleId) - 1].instructions,
                  url: steps[index][Number(moduleId) - 1].url,
                  render: false,
                }}
              >
                Entendi
              </Link>
            </Button>
            <Button category="secondary" onClick={closeModal}>
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
