import { Button } from "@components";
import LineInput from "@components/line-input";
import TextCard from "@components/text-card/textCard";
import { codeMask } from "@utils/inputMasks";
import { Form } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useInterval from "use-interval";
import { Main } from "./style";

export default function StepFour() {
  const [form] = Form.useForm();
  const codeForm = Form.useWatch("code", form);
  const navigate = useNavigate();
  const [code, setCode] = useState<string>(
    String(Math.floor(Math.random() * (999999 - 100000) + 100000)),
  );
  const [timer, setTimer] = useState<number>(55);

  const convertTimer = (timer: number) =>
    `${Math.floor(timer / 60)}:${timer % 60 < 10 ? `0${timer % 60}` : timer % 60}`;

  const generateNewCode = () => {
    setTimer(55);
    setCode(String(Math.floor(Math.random() * (999999 - 100000) + 100000)));
  };

  useInterval(
    () => {
      setTimer((timer) => timer - 1);
    },
    timer > 0 ? 1000 : null,
  );

  return (
    <Main>
      <Form form={form}>
        <Form.Item
          name="code"
          normalize={(value: string) => {
            return codeMask(value);
          }}
          initialValue=""
          rules={[
            {
              validator: (_, value: string) => {
                if (value.length > 0 && value !== codeMask(code)) {
                  return Promise.reject("O código está incorreto");
                }

                return Promise.resolve();
              },
            },
          ]}
        >
          <LineInput
            width={188}
            style={{ margin: "0 auto", fontSize: "32px" }}
            placeholder="_ _ _ _ _ _"
          />
        </Form.Item>
      </Form>

      <h1>Digite o código recebido.</h1>

      {timer > 0 ? (
        <>
          <h2 style={{ marginTop: "2rem", marginBottom: "0.5rem" }}>Não recebeu nenhum código?</h2>
          <h2>Você pode solicitar um novo código em {convertTimer(timer)}.</h2>
        </>
      ) : (
        <button className="new-code" onClick={generateNewCode}>
          Gerar novo código
        </button>
      )}

      <TextCard style={{ marginTop: "78px" }}>
        Nesse momento será enviado um código que deve ser digitado para liberar a conta.
      </TextCard>

      <p style={{ marginTop: 32 }}>(Temporário) {code}</p>

      <Button
        category="primary"
        type="submit"
        width={216}
        disabled={codeForm !== codeMask(code)}
        height={48}
        style={{ margin: "0 auto", marginTop: "4rem" }}
        onClick={() => navigate("/mensagem/criar-conta/passo/5")}
      >
        Avançar
      </Button>
    </Main>
  );
}
