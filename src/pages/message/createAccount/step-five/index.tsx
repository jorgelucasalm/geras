import { Anchor, Button } from "@components";
import ConfirmationModal from "@components/confirmation-modal";
import LineInput from "@components/line-input";
import TextCard from "@components/text-card/textCard";
import { Upload as AntdUpload, message, Form } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { PiCameraPlus } from "react-icons/pi";
import styled from "styled-components";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

export default function StepFive() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [openModal, setOpenModal] = useState<boolean>();

  const handleChange: UploadProps["onChange"] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <DivButton>
      {loading ? <AiOutlineLoading className="loading-icon" /> : <PiCameraPlus />}
    </DivButton>
  );

  return (
    <Main>
      <Upload
        name="avatar"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action="https://run.mocky.io/v3/d8d5bb44-3c39-438a-be2d-60851f4ac6e1"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%", borderRadius: "50%" }} />
        ) : (
          uploadButton
        )}
      </Upload>

      <h1 style={{ color: "var(--blue-800)" }}>Adicionar uma foto de perfil</h1>

      <Form onFinish={() => console.log("openModal")} style={{ width: "100%" }}>
        <Form.Item name="name" style={{ marginTop: 42, marginBottom: 56 }}>
          <LineInput placeholder="Digite seu nome" />
        </Form.Item>

        <TextCard style={{ marginTop: "3.5rem" }}>
          Você pode colocar uma foto e seu nome, se quiser. É assim que as pessoas vão te
          reconhecer.
        </TextCard>

        <Button
          category="primary"
          type="submit"
          style={{ margin: "1.5rem auto", marginTop: 24 }}
          onClick={() => setOpenModal(true)}
        >
          Finalizar
        </Button>
      </Form>

      <ConfirmationModal
        headerTitle="Parabéns"
        headerSubTitle="Você criou sua conta."
        open={openModal}
        onCancel={() => setOpenModal(false)}
      >
        <DivModalBody>
          <p style={{ marginTop: 24, marginBottom: 16 }}>Simulação concluída!</p>
          <p>Vá para o próximo tópico da seção mensagem!</p>

          <Anchor
            to="/home"
            category="primary"
            width={216}
            height={48}
            style={{ margin: "0 auto", marginTop: 40, marginBottom: 24 }}
          >
            Finalizar
          </Anchor>
        </DivModalBody>
      </ConfirmationModal>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
`;

const DivButton = styled.div`
  height: 28px;

  > svg {
    width: 28px;
    height: 28px;
    color: var(--blue-600);
  }

  > .loading-icon {
    -webkit-animation: spin 1s linear infinite;
    -moz-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
  }

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Upload = styled(AntdUpload)`
  display: flex !important;
  flex-direction: column;
  align-items: center;

  .ant-upload {
    background-color: var(--blue-100) !important;
    border: none !important;
    border-radius: 50%;
  }
`;

const DivModalBody = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    color: black;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 16px;
  }
`;
