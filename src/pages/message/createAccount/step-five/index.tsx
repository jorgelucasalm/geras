import { Button } from "@components";
import { EndAlert } from "@components/endAlert/end-alert";
import LineInput from "@components/line-input";
import TextCard from "@components/text-card/textCard";
import { Form, message } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { PiCameraPlus } from "react-icons/pi";
import { useOutletContext } from "react-router-dom";
import { OutletContextType } from "..";
import { DivButton, Main, Upload } from "./style";

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
  const outletContext = useOutletContext() as OutletContextType;
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [openModal, setOpenModal] = useState<boolean>(false);

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

  useEffect(() => {
    outletContext.setFooterFunc({
      onClickNext: (e) => {
        setOpenModal(true);
        e.preventDefault();
      },
    });
  }, [outletContext]);

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

      <EndAlert isOpen={openModal} closeModal={() => setOpenModal(false)} />
    </Main>
  );
}
