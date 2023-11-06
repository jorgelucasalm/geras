import { MainButton } from "@components";
import LoginBackButton from "@components/LoginBackButton";
import MainInput from "@components/MainInput";
import { useMutation } from "@tanstack/react-query";
import api from "@utils/api";
import toastUpdate from "@utils/toastUpdate";
import { Form } from "antd";
import { toast } from "react-toastify";
import styled from "styled-components";
import { LuMail } from "react-icons/lu";
import { FiLock } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import DatePicker from "@components/DatePicker";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export default function Email() {
  const [form] = Form.useForm();
  const [date, setDate] = useState("");

  return (
    <Main>
      <LoginBackButton />
      <Title>XD</Title>

      <FormDiv>
        <Form form={form} layout="vertical" onFinish={() => {}}>
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

const FormDiv = styled.div`
  & .ant-row.ant-form-item-row {
    margin: 0 auto;
    width: max-content;
  }

  & .ant-form-item-label {
    padding-bottom: 0.2rem;
  }

  & .ant-form-item-label > label {
    color: var(--dark-blue);
  }

  & .ant-input-affix-wrapper-status-error {
    border-color: #ff4d4f !important;
  }
`;
