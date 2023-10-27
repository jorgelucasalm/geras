import { MainButton } from "@components";
import LoginBackButton from "@components/LoginBackButton";
import MainInput from "@components/MainInput";
import { useMutation } from "@tanstack/react-query";
import api from "@utils/api";
import toastUpdate from "@utils/toastUpdate";
import { Checkbox, Form } from "antd";
import { toast } from "react-toastify";
import styled from "styled-components";
import isEmail from "validator/lib/isEmail";
import { LuMail } from "react-icons/lu";
import { FiLock } from "react-icons/fi";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";

export default function SignUpPage() {
  const [form] = Form.useForm();
  const rememberPasswordChecked = Form.useWatch<boolean>("rememberPassword", form);

  const loginMutation = useMutation({
    mutationKey: ["user-login"],
    mutationFn: async ({ login, password }: { login: string; password: string }) => {
      const response = await api.post("/v1/user/login", { login, password });
      console.log(response);
    },
    onMutate: () => {
      const toastId = toast.loading("Logando...");

      return { toastId };
    },
    onSuccess: (_, __, context) => {
      toastUpdate("Logado com sucesso", toast.TYPE.SUCCESS, context!.toastId);
    },
    onError: (err: Error, _, context) => {
      toastUpdate("Error", toast.TYPE.ERROR, context!.toastId);
    },
  });

  return (
    <Main>
      <LoginBackButton />
      <Title>CADASTRAR</Title>

      <FormDiv $rememberPasswordChecked={rememberPasswordChecked}>
        <Form form={form} layout="vertical" onFinish={(values) => loginMutation.mutate(values)}>
          <Form.Item
            name="name"
            label="Name"
            initialValue=""
            validateFirst
            rules={[
              {
                validator: (_, value: string) => {
                  if (!value) {
                    return Promise.reject("Nome completo");
                  }

                  return Promise.resolve();
                },
                validateTrigger: "submit",
              },
              {
                validator: (_, value: string) => {
                  if (value && !isEmail(value)) {
                    return Promise.reject("Digite um e-mail válido.");
                  }

                  return Promise.resolve();
                },
              },
            ]}
          >
            <MainInput
              width={296}
              height={48}
              prefix={<AiOutlineUser />}
              placeholder="Nome completo"
            />
          </Form.Item>

          <Form.Item
            name="birthday"
            label="Data de Nascimento"
            initialValue=""
            rules={[
              {
                validator: (_, value: string) => {
                  if (!value) {
                    return Promise.reject("Insira uma senha");
                  }

                  return Promise.resolve();
                },
                validateTrigger: "submit",
              },
            ]}
          >
            <MainInput width={296} height={48} prefix={<AiOutlineCalendar />} />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            initialValue=""
            rules={[
              {
                validator: (_, value: string) => {
                  if (!value) {
                    return Promise.reject("Insira uma senha");
                  }

                  return Promise.resolve();
                },
                validateTrigger: "submit",
              },
            ]}
          >
            <MainInput
              width={296}
              height={48}
              prefix={<LuMail />}
              placeholder="example@gmail.com"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Senha"
            initialValue=""
            rules={[
              {
                validator: (_, value: string) => {
                  if (!value) {
                    return Promise.reject("Insira uma senha");
                  }

                  return Promise.resolve();
                },
                validateTrigger: "submit",
              },
            ]}
          >
            <MainInput.Password
              width={296}
              height={48}
              prefix={<FiLock />}
              placeholder="********"
            />
          </Form.Item>
        </Form>
      </FormDiv>

      <MainButton
        buttonType="primary"
        width={216}
        height={48}
        style={{ margin: "0 auto", marginBottom: "2.4rem" }}
        onClick={() => form.submit()}
      >
        Cadastrar
      </MainButton>
      <MainButton buttonType="secondary" width={216} height={48} style={{ margin: "0 auto" }}>
        Já tenho conta
      </MainButton>
    </Main>
  );
}

const Main = styled.main`
  margin: 0 auto;
  padding: 4.2rem 3.2rem;
  max-width: 36rem;
  max-height: 80rem;
`;

const Title = styled.h1`
  color: var(--dark-blue);
  font-size: 2.4rem;
  margin: 0 auto;
  width: max-content;
`;

const FormDiv = styled.div<{ $rememberPasswordChecked: boolean }>`
  & .ant-form-item-label {
    padding-bottom: 0.2rem;
  }

  & .ant-form-item-label > label {
    color: var(--dark-blue);
  }

  & .ant-checkbox-wrapper > span:last-child {
    color: ${({ $rememberPasswordChecked }) =>
      $rememberPasswordChecked ? "#53a2ff" : "var(--dark-blue)"};
    font-size: 1.6rem;
    transform: translateY(1px);
  }

  & .ant-checkbox-inner {
    width: 2rem;
    height: 2rem;
    border: 1px solid
      ${({ $rememberPasswordChecked }) =>
        $rememberPasswordChecked ? "#53a2ff" : "var(--dark-blue)"};

    &::after {
      transform: rotate(45deg) scale(1) translate(-50%, -60%);
    }
  }

  & .ant-input-affix-wrapper-status-error {
    border-color: #ff4d4f !important;
  }
`;
