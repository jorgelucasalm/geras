import { Button } from "@components";
import DatePicker from "@components/DatePicker";
import LoginBackButton from "@components/LoginBackButton";
import MainInput from "@components/main-input/MainInput";
import { useMutation } from "@tanstack/react-query";
import api from "@utils/api";
import toastUpdate from "@utils/toastUpdate";
import { Form } from "antd";
import { AxiosError } from "axios";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

export default function SignUpPage() {
  const [form] = Form.useForm();
  const rememberPasswordChecked = Form.useWatch<boolean>("rememberPassword", form);
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  type UserType = {
    name: string;
    email: string;
    password: string;
  };

  const loginMutation = useMutation({
    mutationKey: ["user-signup"],
    mutationFn: async ({ name, email, password }: UserType) => {
      await api.post("/v1/user/create", { name, email, birthage: date, password });
    },
    onMutate: () => {
      const toastId = toast.loading("Criando...");

      return { toastId };
    },
    onSuccess: (_, __, context) => {
      toastUpdate("Logado com sucesso", toast.TYPE.SUCCESS, context!.toastId);
      navigate("/login");
    },
    onError: (err: Error, _, context) => {
      if (err instanceof AxiosError) {
        toastUpdate("Error | " + err.response?.data.message, toast.TYPE.ERROR, context!.toastId);
      } else {
        toastUpdate("Error", toast.TYPE.ERROR, context!.toastId);
      }
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
            label="Nome"
            initialValue=""
            validateFirst
            rules={[
              {
                validator: (_, value: string) => {
                  if (!value) {
                    return Promise.reject("Digite seu nome");
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
              prefix={<AiOutlineUser />}
              placeholder="Nome completo"
            />
          </Form.Item>

          <Form.Item
            name="birthage"
            label="Data de nascimento"
            validateFirst
            rules={[
              {
                validator: (_) => {
                  if (!date) {
                    return Promise.reject("Coloque uma data valida");
                  }

                  return Promise.resolve();
                },
                validateTrigger: "submit",
              },
            ]}
          >
            <DatePicker
              width={296}
              height={48}
              picker="date"
              onChange={(e) => {
                setDate(e!.toISOString());
              }}
            />
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

      <Button
        category="primary"
        style={{ margin: "0 auto", marginBottom: "2rem" }}
        onClick={() => form.submit()}
      >
        Cadastrar
      </Button>
      <Button category="secondary" style={{ margin: "0 auto" }}>
        <Link to={"/entrar"}>Já tenho conta</Link>
      </Button>
    </Main>
  );
}

const Main = styled.main`
  margin: 0 auto;
  padding: 2.625rem 2rem;
  max-width: 22.5rem;
  max-height: 50rem;
`;

const Title = styled.h1`
  color: var(--blue-800);
  font-size: 1.5rem;
  margin: 0 auto;
  margin-top: 1.125rem;
  margin-bottom: 3.5rem;
  width: max-content;
`;

const FormDiv = styled.div<{ $rememberPasswordChecked: boolean }>`
  & .ant-row.ant-form-item-row {
    margin: 0 auto;
    width: max-content;
  }

  & .ant-form-item-label {
    padding-bottom: 0.125rem;
  }

  & .ant-form-item-label > label {
    color: var(--blue-800);
  }

  & .ant-checkbox-wrapper > span:last-child {
    color: ${({ $rememberPasswordChecked }) =>
      $rememberPasswordChecked ? "#53a2ff" : "var(--blue-800)"};
    font-size: 1.6rem;
    transform: translateY(1px);
  }

  & .ant-checkbox-inner {
    width: 2rem;
    height: 2rem;
    border: 1px solid
      ${({ $rememberPasswordChecked }) =>
        $rememberPasswordChecked ? "#53a2ff" : "var(--blue-800)"};

    &::after {
      transform: rotate(45deg) scale(1) translate(-50%, -60%);
    }
  }

  & .ant-input-affix-wrapper-status-error {
    border-color: #ff4d4f !important;
  }

  & .ant-picker {
    border: 1px solid var(--blue-800) !important;
  }

  & .ant-picker-input > span {
    color: var(--blue-800);
  }
`;
