import { Header } from "@components";
import Footer from "@components/footer/footer";
import { HeaderMenu } from "@components/header-menu/headerMenu";
import { Step } from "@components/steps/steps";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import StepOne from "./step-one";
import StepTwo from "./step-two";
import { useMemo, useState } from "react";

const headerTexts: { title: string; subtitle: string }[] = [
  { title: "Passo 1", subtitle: "Selecionando o contato desejado." },
  { title: "Passo 2", subtitle: "Abrindo a conversa." },
];

export type FooterFuncType = {
  onClickNext?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickPrevious?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function SendMessage() {
  const location = useLocation();
  const pathname = location.pathname.slice(1).split("/");
  const [messageText, sendMessageText, stepText, stepValueText] = pathname;
  const [footerFunc, setFooterFunc] = useState<FooterFuncType>({
    onClickNext: undefined,
    onClickPrevious: undefined,
  });
  const outletContext = useMemo(
    () => ({
      setFooterFunc,
    }),
    [],
  );

  //Esses if's estão tratando o pathname da rota pra nao ocorrer conflito.
  if (messageText !== "mensagem" || sendMessageText !== "enviar-mensagem") {
    return <Navigate to="/mensagem" />;
  }

  if (
    (stepText !== "passos" && stepText !== "passo") ||
    (stepText === "passo" && stepValueText === undefined)
  ) {
    return <Navigate to="/mensagem/enviar-mensagem/passos" />;
  }

  if (
    (stepValueText !== undefined && Number.isNaN(+stepValueText)) ||
    +stepValueText <= 0 ||
    +stepValueText > 2
  ) {
    return <Navigate to="/mensagem/enviar-mensagem/passos" />;
  }

  if (stepValueText === undefined) {
    return (
      <>
        <Step
          steps={["Escolher contato", "Abrir conversa", "Enviar mensagem"]}
          url="/mensagem/enviar-mensagem/passo/1"
          render={false}
        />
      </>
    );
  }

  const stepNumber = +stepValueText;

  return (
    <Main>
      <HeaderMenu
        backButtonUrl={
          stepNumber > 1
            ? `/mensagem/enviar-mensagem/passo/${stepNumber - 1}`
            : "/mensagem/enviar-mensagem/passos"
        }
        orangeBar
      />

      <OutletDiv>
        <Header
          category="step"
          title={headerTexts[stepNumber - 1].title}
          subtitle={headerTexts[stepNumber - 1].subtitle}
        />
        <Outlet context={outletContext} />
      </OutletDiv>

      <Footer
        previousToUrl={
          stepNumber > 1
            ? `/mensagem/enviar-mensagem/passo/${stepNumber - 1}`
            : "/mensagem/enviar-mensagem/passos"
        }
        nextToUrl={stepNumber < 2 ? `/mensagem/enviar-mensagem/passo/${stepNumber + 1}` : ""} //TODO chamar o modal de concluído
        onClickNext={footerFunc.onClickNext}
        onClickPrevious={footerFunc.onClickPrevious}
      />
    </Main>
  );
}

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  align-items: center;
`;

export const OutletDiv = styled.div`
  width: 100%;
  height: 100%;
`;

SendMessage.StepOne = StepOne;
SendMessage.StepTwo = StepTwo;
