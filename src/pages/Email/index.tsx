import { Navbar } from "@components/nav/nav";
import styled from "styled-components";
import { Step1, Step2, Step3, Step4, Step5 } from "./steps";
import { Button } from "@components/button/button";
import { useMemo, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Step } from "@components/steps/steps";
import { HeaderMenu } from "@components/header-menu/headerMenu";
import { OutletDiv } from "@pages/download-page/download-page-style";
import { Anchor, Header } from "@components";
import Footer from "@components/footer/footer";
import { EndAlert } from "@components/endAlert/end-alert";

const headerTexts: { title: string; subtitle: string }[] = [
  { title: "Passo 1", subtitle: "Insira seus dados" },
  { title: "Passo 2", subtitle: "Informe seus dados" },
  { title: "Passo 3", subtitle: "Escolha o seu endereço de e-mail." },
  { title: "Passo 4", subtitle: "Criar uma senha." },
  { title: "Passo 5", subtitle: "Adicionar número de telefone." },
];

type FooterFuncType = {
  onClickNext?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickPrevious?: React.MouseEventHandler<HTMLAnchorElement>;
};

export type OutletContextType = {
  setFooterFunc: React.Dispatch<React.SetStateAction<FooterFuncType>>;
};

export default function Email() {
  const location = useLocation();
  const pathname = location.pathname.slice(1).split("/");
  const [messageText, createAccountText, stepText, stepValueText] = pathname;
  const [footerFunc, setFooterFunc] = useState<FooterFuncType>({
    onClickNext: undefined,
    onClickPrevious: undefined,
  });
  const outletContext = useMemo(() => ({ setFooterFunc }), []);
  const [openModal, setOpenModal] = useState<boolean>(false);

  //Esses if's estão tratando o pathname da rota pra nao ocorrer conflito.
  if (messageText !== "email" || createAccountText !== "criar-conta") {
    return <Navigate to="/email" />; //TODO Mudar isso pra rota do menu de mensagens
  }

  if (
    (stepText !== "passos" && stepText !== "passo") ||
    (stepText === "passo" && stepValueText === undefined)
  ) {
    return <Navigate to="/email/criar-conta/passos" />; //TODO Mudar isso pra rota do menu de mensagens
  }

  if (
    (stepValueText !== undefined && Number.isNaN(+stepValueText)) ||
    +stepValueText <= 0 ||
    +stepValueText > 5
  ) {
    return <Navigate to="/email/criar-conta/passos" />; //TODO Mudar isso pra rota do menu de mensagens
  }

  if (stepValueText === undefined) {
    return (
      <>
        <Step
          steps={["Termos e condições", "Informar número", "Validar o número", "Foto e nome"]}
          url="/email/criar-conta/passo/1"
          render={false}
        />
      </>
    );
  }

  const stepNumber = +stepValueText;
  return (
    <>
      <HeaderMenu
        backButtonUrl={
          stepNumber > 1
            ? `/email/criar-conta/passo/${stepNumber - 1}`
            : "/email/criar-conta/passos"
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

        {stepNumber === 5 && (
          <Button
            category="primary"
            type="submit"
            style={{ margin: "1.5rem auto", marginTop: 24 }}
            onClick={() => setOpenModal(true)}
          >
            Finalizar
          </Button>
        )}
        <EndAlert isOpen={openModal} closeModal={() => setOpenModal(false)} />
      </OutletDiv>

      <Footer
        previousToUrl={
          stepNumber > 1
            ? `/email/criar-conta/passo/${stepNumber - 1}`
            : "/email/criar-conta/passos"
        }
        nextToUrl={stepNumber < 5 ? `/email/criar-conta/passo/${stepNumber + 1}` : ""} //TODO chamar o modal de concluído
        onClickNext={footerFunc.onClickNext}
        onClickPrevious={footerFunc.onClickPrevious}
      />
    </>
  );
}

Email.StepOne = Step1;
Email.StepTwo = Step2;
Email.StepThree = Step3;
Email.StepFour = Step4;
Email.StepFive = Step5;
// const Footer = styled.footer``;
