import { Button } from "@components/button/button";
import { Card, Content } from "./alert-style";
import { PiWarningOctagonBold } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { Key } from "react";

interface AlertProps {
  isOpen: boolean;
  closeModal: () => void;
  simulationId: Key;
}

export function Alert({ isOpen, closeModal, simulationId }: AlertProps) {

  const steps = [
    {
      url: "/mensagem/",
      instucions: ["Termos e condições", "Informar número", "Validar o número", "Foto e nome"],
    },
    {
      url: "/mensagem/criar-contato/passo-1",
      instucions: ["Lista de contatos", "Informar número", "Salvar"],
    },
    {
      url: "/mensagem/",
      instucions: ["Escolher contato", "Abrir contato", "Enviar mensagem"],
    },
    {
      url: "/mensagem/",
      instucions: ["Pesquisar", "Escolher aplicativo", "Instalar apliativo"],
    },
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
                  steps: steps[Number(simulationId) - 1].instucions,
                  url: steps[Number(simulationId) - 1].url,
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
