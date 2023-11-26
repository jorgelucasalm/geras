import { Header } from "@components";
import Footer from "@components/footer/footer";
import { HeaderMenu } from "@components/header-menu/headerMenu";
import { Step } from "@components/steps/steps";
import { useMemo, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Main, OutletDiv } from "./download-page-style";

import StepOne from "./step-one";
import StepTwo from "./step-two";

const headerTexts: { title: string; subtitle: string }[] = [
  { title: "Passo 1", subtitle: "Busque o nome do aplicativo" },
  { title: "Passo 2", subtitle: "Instalação do aplicativo" },
];

type FooterFuncType = {
  onClickNext?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickPrevious?: React.MouseEventHandler<HTMLAnchorElement>;
};

export type OutletContextType = {
  setFooterFunc: React.Dispatch<React.SetStateAction<FooterFuncType>>;
};

export default function Download() {
  const location = useLocation();
  const pathname = location.pathname.slice(1).split("/");
  const [downloadText, App, stepText, stepValueText] = pathname;
  const [footerFunc, setFooterFunc] = useState<FooterFuncType>({
    onClickNext: undefined,
    onClickPrevious: undefined,
  });
  const outletContext = useMemo(() => ({ setFooterFunc }), []);

  //Esses if's estão tratando o pathname da rota pra nao ocorrer conflito.
  if (downloadText !== "download") {
    return <Navigate to="/home" />; //TODO Mudar isso pra rota do menu de mensagens
  }

  if (App !== "whatsapp" && App !== "ifood" && App !== "uber") {
    return <Navigate to="/home" />; //TODO Mudar isso pra rota do menu de mensagens
  }

  if (
    (stepText !== "passos" && stepText !== "passo") ||
    (stepText === "passo" && stepValueText === undefined)
  ) {
    return <Navigate to={"/download/" + App + "/passos"} />; //TODO Mudar isso pra rota do menu de mensagens
  }

  if (
    (stepValueText !== undefined && Number.isNaN(+stepValueText)) ||
    +stepValueText <= 0 ||
    +stepValueText > 5
  ) {
    return <Navigate to={"/download/" + App + "/passos"} />; //TODO Mudar isso pra rota do menu de mensagens
  }

  if (stepValueText === undefined) {
    return (
      <>
        <Step
          steps={["Pesquisar", "Escolher aplicativo", "Instalar aplicativo"]}
          url={"/download/" + App + "/passo/1"}
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
            ? `/download/${App}/passo/${stepNumber - 1}`
            : "/download/" + App + "/passos"
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
            ? `/download/${App}/passo/${stepNumber - 1}`
            : "/download/" + App + "/passos"
        }
        nextToUrl={stepNumber < 2 ? `/download/${App}/passo/${stepNumber + 1}` : ""} //TODO chamar o modal de concluído
        onClickNext={footerFunc.onClickNext}
        onClickPrevious={footerFunc.onClickPrevious}
      />
    </Main>
  );
}

Download.StepOne = StepOne;
Download.StepTwo = StepTwo;
