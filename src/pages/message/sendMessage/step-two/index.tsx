import { Anchor } from "@components";
import ConfirmationModal from "@components/confirmation-modal";
import MainInput from "@components/main-input/MainInput";
import TextCard from "@components/text-card/textCard";
import { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import { Navigate, useLocation, useOutletContext } from "react-router-dom";
import { FooterFuncType } from "..";
import { UserContactWithIcon } from "../step-one";
import { ContactHeader } from "./components/contactHeader";
import { UserTextCard } from "./components/userTextCard";
import { Div, DivModalBody } from "./style";
import { EndAlert } from "@components/endAlert/end-alert";

type OutletContextType = {
  setFooterFunc: React.Dispatch<React.SetStateAction<FooterFuncType>>;
};

export default function StepTwo() {
  const location = useLocation();
  const outletContext = useOutletContext() as OutletContextType;
  const [messageText, setMessageText] = useState<string>("");
  const [arrayMessages, setArrayMessages] = useState<{ message: string; type: "USER" | "APP" }[]>([
    { message: "Basta digitar para enviar uma mensagem.", type: "APP" },
  ]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    outletContext.setFooterFunc({
      onClickNext: (e) => {
        if (arrayMessages.length !== 1) setOpenModal(true);
        e.preventDefault();
      },
    });
  }, [outletContext, arrayMessages]);

  if (location.state === undefined || location.state === null) {
    return <Navigate to="/mensagem/enviar-mensagem/passo/1" />; //TODO Decidir dps qual rota enviar nesse navigate.
  }

  const selectedContact = location.state.selectedContact as UserContactWithIcon;
  const sendMessage = () => {
    if (messageText === "") return;
    if (arrayMessages.length === 1) {
      setArrayMessages([
        { message: "Parabéns!", type: "APP" },
        { message: messageText, type: "USER" },
        ...arrayMessages,
      ]);
      setMessageText("");
      return;
    }

    setArrayMessages([{ message: messageText, type: "USER" }, ...arrayMessages]);
    setMessageText("");
  };

  return (
    <>
      <Div>
        <ContactHeader selectedContact={selectedContact} />

        <p style={{ marginBottom: "24px" }}>Suas mensagens são protegidas.</p>

        <section id="array-messages">
          {arrayMessages.map(({ message, type }, index) => {
            if (type === "APP")
              return (
                <TextCard key={index} width={240}>
                  {message}
                </TextCard>
              );

            return (
              <UserTextCard key={index} width={210}>
                {message}
              </UserTextCard>
            );
          })}
        </section>

        <MainInput
          width={296}
          height={36}
          iconWidth={20}
          iconHeight={20}
          suffix={<IoSend onClick={() => sendMessage()} />}
          value={messageText}
          onChange={({ target }) => setMessageText(target.value)}
          onPressEnter={() => sendMessage()}
        />
      </Div>

      <EndAlert isOpen={openModal} closeModal={() => setOpenModal(false)} />
    </>
  );
}
