import { Header } from "@components";
import Footer from "@components/footer/footer";
import { HeaderMenu } from "@components/header-menu/headerMenu";
import { Step } from "@components/steps/steps";
import { useMemo, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Main, OutletDiv } from "./createAccount-style";

import StepFour from "./step-four";
import StepOne from "./step-one";
import StepTwo from "./step-two";
import StepFive from "./step-five";

const headerTexts: { title: string; subtitle: string }[] = [
  { title: "Passo 1", subtitle: "Concordar com os termos." },
  { title: "Passo 2", subtitle: "Adicionar o número." },
  { title: "Passo 3", subtitle: "Escolha o seu endereço de e-mail." },
  { title: "Passo 4", subtitle: "Validação do número." },
  { title: "Passo 5", subtitle: "Finalizando a criação da conta." },
];

type FooterFuncType = {
  onClickNext?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickPrevious?: React.MouseEventHandler<HTMLAnchorElement>;
};

export type OutletContextType = {
  setFooterFunc: React.Dispatch<React.SetStateAction<FooterFuncType>>;
};

export default function CreateAccount() {
  const location = useLocation();
  const pathname = location.pathname.slice(1).split("/");
  const [messageText, createAccountText, stepText, stepValueText] = pathname;
  const [footerFunc, setFooterFunc] = useState<FooterFuncType>({
    onClickNext: undefined,
    onClickPrevious: undefined,
  });
  const outletContext = useMemo(() => ({ setFooterFunc }), []);

  //Esses if's estão tratando o pathname da rota pra nao ocorrer conflito.
  if (messageText !== "mensagem" || createAccountText !== "criar-conta") {
    return <Navigate to="/mensagem" />; //TODO Mudar isso pra rota do menu de mensagens
  }

  if (
    (stepText !== "passos" && stepText !== "passo") ||
    (stepText === "passo" && stepValueText === undefined)
  ) {
    return <Navigate to="/mensagem/criar-conta/passos" />; //TODO Mudar isso pra rota do menu de mensagens
  }

  if (
    (stepValueText !== undefined && Number.isNaN(+stepValueText)) ||
    +stepValueText <= 0 ||
    +stepValueText > 5
  ) {
    return <Navigate to="/mensagem/criar-conta/passos" />; //TODO Mudar isso pra rota do menu de mensagens
  }

  if (stepValueText === undefined) {
    return (
      <>
        <Step
          steps={["Termos e condições", "Informar número", "Validar o número", "Foto e nome"]}
          url="/mensagem/criar-conta/passo/1"
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
            ? `/mensagem/criar-conta/passo/${stepNumber - 1}`
            : "/mensagem/criar-conta/passos"
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
            ? `/mensagem/criar-conta/passo/${stepNumber === 4 ? stepNumber - 2 : stepNumber - 1}`
            : "/mensagem/criar-conta/passos"
        }
        nextToUrl={
          stepNumber < 5
            ? `/mensagem/criar-conta/passo/${stepNumber === 2 ? stepNumber + 2 : stepNumber + 1}`
            : ""
        } //TODO chamar o modal de concluído
        onClickNext={footerFunc.onClickNext}
        onClickPrevious={footerFunc.onClickPrevious}
      />
    </Main>
  );
}

CreateAccount.StepOne = StepOne;
CreateAccount.StepTwo = StepTwo;
CreateAccount.StepFour = StepFour;
CreateAccount.StepFive = StepFive;
