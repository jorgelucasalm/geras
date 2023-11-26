import { NewContactButton } from "@components";
import TextCard from "@components/text-card/textCard";
import { Contact } from "@pages/message/components/contact/contact";
import { useQuery } from "@tanstack/react-query";
import api from "@utils/api";
import axios from "axios";
import { GoPerson } from "react-icons/go";

import IconMale1 from "@pages/message/images/picture1.png";
import IconFemale1 from "@pages/message/images/picture2.png";
import IconFemale2 from "@pages/message/images/picture3.png";
import IconFemale3 from "@pages/message/images/picture4.png";
import IconMale2 from "@pages/message/images/picture5.png";
import { getGenderByName } from "br-gender";
import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Div, Section } from "./style";

type FooterFuncType = {
  onClickNext?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickPrevious?: React.MouseEventHandler<HTMLAnchorElement>;
};

type OutletContextType = {
  setFooterFunc: React.Dispatch<React.SetStateAction<FooterFuncType>>;
};

type UserContactType = {
  first_name: string;
  id: string;
  last_name: string;
  phone: string;
  user_id: string;
};

export interface UserContactWithIcon extends UserContactType {
  icon: string;
}

function getIconByGender(gender: "Male" | "Female" | "NA") {
  const percentage = Math.random();
  if (gender === "Male") {
    if (percentage < 1 / 2) return IconMale1;
    else return IconMale2;
  }
  if (percentage < 1 / 3) return IconFemale1;
  if (percentage > 1 / 3 && percentage < 2 / 3) return IconFemale2;
  return IconFemale3;
}

export default function StepOne() {
  const navigate = useNavigate();
  const outletContext = useOutletContext() as OutletContextType;

  // Essa query e temporária pra pegar um token do back que tenha usuários.
  useQuery({
    queryKey: ["temporary-query"],
    queryFn: async () => {
      const {
        data: { access_token },
      } = await axios.post<{ access_token: string }>(
        `${import.meta.env.VITE_API_URL}/v1/user/login`,
        {
          login: "bloca@gmail.com",
          password: "12345",
        },
      );

      localStorage.setItem("access_token", access_token);
      return null;
    },
  });

  const contactsQuery = useQuery({
    queryKey: ["user-contacts-query"],
    queryFn: async () => {
      const { data } = await api.get<UserContactType[]>("/v1/user/contacts");
      const userContacts = [] as UserContactWithIcon[];
      for (const contact of data) {
        const gender = (await getGenderByName(contact.first_name)) as "Male" | "Female" | "NA";
        const icon = getIconByGender(gender);

        userContacts.push({ ...contact, icon });
      }

      return userContacts;
    },
    enabled: localStorage.getItem("access_token") !== null,
  });

  useEffect(() => {
    outletContext.setFooterFunc({
      onClickNext: (e) => {
        if (contactsQuery.data !== undefined) {
          const selectedContact =
            contactsQuery.data[Math.floor(Math.random() * contactsQuery.data.length)]; // Selecionando um contato aleatoriamente
          navigate("/mensagem/enviar-mensagem/passo/2", { state: { selectedContact } });
        }
        e.preventDefault();
      },
    });
  }, [outletContext, contactsQuery, navigate]);

  return (
    <Div>
      <TextCard style={{ marginBottom: "3rem" }}>
        Clique no contato que deseja iniciar uma conversa.
      </TextCard>

      <NewContactButton
        onClick={() => {
          // Alinhar com o grupo se devo jogar o usuário pra simulação de criar contato nesse botão
        }}
      >
        <span>
          <GoPerson size={24} />
        </span>
        <p>Novo contato</p>
      </NewContactButton>

      <p style={{ marginBottom: 8 }}>Contatos salvos</p>
      <Section>
        {contactsQuery.data?.map((contact) => {
          return (
            <Contact
              key={contact.id}
              icon={contact.icon}
              name={`${contact.first_name} ${contact.last_name}`}
              onClick={() =>
                navigate("/mensagem/enviar-mensagem/passo/2", {
                  state: { selectedContact: contact },
                })
              }
              style={{ cursor: "pointer" }}
            />
          );
        })}
      </Section>
    </Div>
  );
}
