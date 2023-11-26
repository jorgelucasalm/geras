import StepOne from "./step-one/step-one";
import StepTwo from "./step-two/step-two";
import StepThree from "./step-three/step-three";
import StepFour from "./step-four/step-four";
import { Step } from "@components/steps/steps";
import { Outlet, useLocation } from "react-router-dom";

export default function NewContact() {
  const location = useLocation();
  const pathname = location.pathname.split("/");

  if (pathname.length <= 3) {
    return (
      <Step
        steps={["Lista de contatos", "Informar número", "Salvar"]}
        url="/mensagem/criar-contato/passo/1"
        render={false}
      />
    );
  }

  return <Outlet />;
}

NewContact.StepOne = StepOne;
NewContact.StepTwo = StepTwo;
NewContact.StepThree = StepThree;
NewContact.StepFour = StepFour;
