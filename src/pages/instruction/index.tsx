import { Step } from "@components/steps/steps";

export default function Instruction() {
  return (
    <>
      <Step
        steps={["Aprenda a criar um e-mail", "Entrar no GERAS"]}
        url=""
        render
        renderUrl="/home"
      />
    </>
  );
}
