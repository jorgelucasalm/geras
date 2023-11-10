import MainInput from "@components/MainInput";
import { Navbar } from "@components/nav/nav";
import { Footer } from "@components/footer/footer";
import { useMutation } from "@tanstack/react-query";
import api from "@utils/api";
import toastUpdate from "@utils/toastUpdate";
import { Checkbox, Form, Input, Select } from "antd";
import { AxiosError } from "axios";
import { AiOutlineUser } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import DatePicker from "@components/DatePicker";
import { MainSelect } from "@components/select/select";
import { LuMail, LuPhone } from "react-icons/lu";

export function Step1() {
  return (
    <Section>
      <Header>
        <h1>Passo 1</h1>
        <h2>Insira seus dados</h2>
      </Header>
      <Content>
        <Alert>
          <p>É necessário fornecer o seu nome e sobrenome para começar o processo de registro!</p>
        </Alert>
        <MainInput width={296} height={48} prefix={<AiOutlineUser />} placeholder="Nome" />
        <MainInput width={296} height={48} prefix={<AiOutlineUser />} placeholder="Sobrenome" />
      </Content>
    </Section>
  );
}

export function Step2() {
  return (
    <Section>
      <Header>
        <h1>Passo 2</h1>
        <h2>Informe seus dados</h2>
      </Header>
      <Content>
        <Alert>
          <p>
            A data de nascimento é uma informação importante para medidas de segurança cabíveis.
          </p>
        </Alert>
        <DatePicker width={296} height={48} picker="date" placeholder="dia/mês/ano" />
        <MainSelect />
      </Content>
    </Section>
  );
}

export function Step3() {
  return (
    <Section>
      <Header>
        <h1>Passo 3</h1>
        <h2>Escolha o seu endereço de e-mail.</h2>
      </Header>
      <Content>
        <Alert>
          <p>Seu e-mail é seu endereço digital e por onde pessoas lhe enviarão mensagens.</p>
        </Alert>
        <Form.Item name="email" label="E-mail">
          <MainInput width={296} height={48} prefix={<LuMail />} placeholder="example@gmail.com" />
        </Form.Item>
      </Content>
    </Section>
  );
}

export function Step4() {
  return (
    <Section>
      <Header>
        <h1>Passo 4</h1>
        <h2>Use uma combinação de letras, números e símbolos</h2>
      </Header>
      <Content>
        <Alert>
          <p>Use uma combinação de letras, números e símbolos</p>
        </Alert>
        <Form.Item name="pass" label="Senha" style={{ marginBottom: 0 }}>
          <MainInput.Password width={296} height={48} prefix={<FiLock />} placeholder="********" />
        </Form.Item>
        <Form.Item name="re-pass" label="Confirmar senha">
          <MainInput.Password width={296} height={48} prefix={<FiLock />} placeholder="********" />
        </Form.Item>
      </Content>
    </Section>
  );
}

export function Step5() {
  return (
    <Section>
      <Header>
        <h1>Passo 5</h1>
        <h2>Adicionar número de telefone.</h2>
      </Header>
      <Content>
        <Alert>
          <p>Seu número pode ser usado para recuperar a sua senha, caso você esqueça. </p>
        </Alert>
        <Form.Item name="phone" label="Número" style={{ marginBottom: 0 }}>
          <MainInput width={296} height={48} prefix={<LuPhone />} placeholder="(00) 9 0000-0000" />
        </Form.Item>
      </Content>
    </Section>
  );
}

const Section = styled.main`
  margin: 0 auto;
  padding: 2.625rem 2rem;
  max-width: 22.5rem;
  max-height: 50rem;
`;

const Header = styled.header`
  text-align: center;
  & h2 {
    margin: 0.8rem 0rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Alert = styled.div`
  border-radius: 24px 24px 24px 4px;
  border: 2px solid #ffc530;
  background: #ffefc6;

  padding: 1rem;
`;

// const Footer = styled.footer``;
