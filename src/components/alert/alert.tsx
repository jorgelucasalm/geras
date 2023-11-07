import { Button } from "@components/button/button";
import { Card, Content } from "./alert-style";
import { PiWarningOctagonBold } from "react-icons/pi";
import { useRef, useEffect } from "react";

interface AlertProps {
  isOpen: boolean; 
  closeModal: () => void;
}

export function Alert({ isOpen, closeModal }: AlertProps) {
  if (isOpen) {
    return (
      <Content>
        <Card>
          <h1>Atenção:</h1>
          <PiWarningOctagonBold size={32} />
          <p>Você está iniciando uma simulação.</p>
          <div>
            <Button>Entendi</Button>
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
