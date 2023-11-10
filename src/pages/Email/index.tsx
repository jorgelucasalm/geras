import { Footer } from "@components/footer/footer";
import { Navbar } from "@components/nav/nav";
import styled from "styled-components";
import { Step1, Step2, Step3, Step4, Step5 } from "./steps";
import { Button } from "@components/button/button";
import { useState } from "react";

export default function Email() {
  const [step, setStep] = useState(1);
  console.log(step);

  return (
    <Main>
      <Navbar />
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
      {step === 5 && <Step5 />}
      <Footer>
        <Button category="secundary" onClick={() => step > 1 && setStep(step - 1)}>
          Anterior
        </Button>
        <Button onClick={() => step < 5 && setStep(step + 1)}>Proximo</Button>
      </Footer>
    </Main>
  );
}

const Main = styled.div``;

// const Footer = styled.footer``;
