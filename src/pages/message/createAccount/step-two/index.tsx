import { Anchor, Button } from "@components";
import ConfirmationModal from "@components/confirmation-modal";
import LineInput from "@components/line-input";
import TextCard from "@components/text-card/textCard";
import { dddMask, phoneMask } from "@utils/inputMasks";
import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { Div, DivModalBody } from "./style";
import { useOutletContext } from "react-router-dom";
import { OutletContextType } from "..";

export default function StepTwo() {
  const outletContext = useOutletContext() as OutletContextType;
  const [form] = useForm();
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    outletContext.setFooterFunc({
      onClickNext: (e) => {
        (async () => {
          try {
            await form.validateFields();
            setOpenModal(true);
          } catch (err) {}
        })();
        e.preventDefault();
      },
    });
  }, [outletContext, form]);

  return (
    <Div>
      <TextCard style={{ marginBottom: 40, marginTop: 64 }}>
        Agora, você deverá informar o país e o número do seu celular.
      </TextCard>

      <Form
        form={form}
        onFinish={() => {
          setOpenModal(true);
        }}
      >
        <span>
          <Form.Item
            name="ddd"
            initialValue=""
            normalize={(value: string) => dddMask(value)}
            validateFirst
            rules={[
              {
                validator: (_, value: string) => {
                  if (!value) {
                    return Promise.reject("Insira um prefixo (o prefixo do Brasil é 55)");
                  }

                  return Promise.resolve();
                },
              },
              {
                validateTrigger: "submit",
                validator: (_, value: string) => {
                  if (value.length !== 3) {
                    return Promise.reject("Insira um prefixo válido");
                  }

                  return Promise.resolve();
                },
              },
            ]}
          >
            <LineInput type="text" placeholder="+55" />
          </Form.Item>
          <Form.Item
            name="phone"
            initialValue=""
            validateFirst
            normalize={(value: string) => phoneMask(value)}
            rules={[
              {
                validator: (_, value: string) => {
                  if (!value) {
                    return Promise.reject("Insira um número de telefone");
                  }

                  return Promise.resolve();
                },
              },
              {
                validator: (_, value: string) => {
                  if (value.length !== 16) {
                    return Promise.reject("Insira um número de telefone válido");
                  }

                  return Promise.resolve();
                },
              },
            ]}
          >
            <LineInput type="text" placeholder="(00) 9 0000-0000" />
          </Form.Item>

          <Button
            category="primary"
            type="submit"
            width={216}
            height={48}
            style={{ margin: "0 auto", marginTop: "8rem" }}
          >
            Avançar
          </Button>
        </span>
      </Form>

      <ConfirmationModal
        headerTitle="Passo 3"
        headerSubTitle="Confirmação do número digitado."
        open={openModal}
        onCancel={() => setOpenModal(false)}
      >
        <DivModalBody>
          <p>Confirme seu número:</p>
          <p style={{ marginTop: 24, marginBottom: 16 }}>{`${form.getFieldValue(
            "ddd",
          )} ${form.getFieldValue("phone")}`}</p>
          <p>Esse número está correto ou você deseja editar?</p>

          <Anchor
            to="/mensagem/criar-conta/passo/4"
            category="primary"
            width={216}
            height={48}
            style={{ margin: "0 auto", marginTop: 40, marginBottom: 24 }}
          >
            Continuar
          </Anchor>
          <Button
            category="secondary"
            width={216}
            height={48}
            style={{ margin: "0 auto" }}
            onClick={() => setOpenModal(false)}
          >
            Editar
          </Button>
        </DivModalBody>
      </ConfirmationModal>
    </Div>
  );
}
