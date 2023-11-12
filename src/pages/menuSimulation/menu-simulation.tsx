import { Key, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Header } from "@components/header/header";
import { Navbar } from "@components/navbar/navbar";
import { Container } from "./menu-simulation-style";
import { MenuButton } from "@components/menuButton/menu-button";

import { StartAlert } from "@components/startAlert/start-alert";

import {
  GoPerson,
  GoPersonAdd,
  GoCommentDiscussion,
  GoMoveToBottom,
  GoMention,
  GoUnlock,
  GoKey,
  GoMilestone,
} from "react-icons/go";

import { CiPizza } from "react-icons/ci";
import { BiCar, BiMapAlt, BiSearch } from "react-icons/bi";
import { FloatButton } from "@components/floatButton/float-button";

export function Simulation() {
  const location = useLocation();
  const { title, subtitle, simulations, index } = location.state;
  const navigate = useNavigate();

  function getIcon(icon: string) {
    switch (icon) {
      case "GoPerson":
        return <GoPerson size={32} />;
      case "GoPersonAdd":
        return <GoPersonAdd size={32} />;
      case "GoCommentDiscussion":
        return <GoCommentDiscussion size={32} />;
      case "GoMoveToBottom":
        return <GoMoveToBottom size={32} />;
      case "GoMention":
        return <GoMention size={32} />;
      case "GoUnlock":
        return <GoUnlock size={32} />;
      case "GoKey":
        return <GoKey size={32} />;
      case "GoMilestone":
        return <GoMilestone size={32} />;

      case "BiCar":
        return <BiCar size={32} />;
      case "BiMapAlt":
        return <BiMapAlt size={32} />;
      case "BiSearch":
        return <BiSearch size={32} />;

      case "CiPizza":
        return <CiPizza size={32} />;

      default:
        return "x";
    }
  }

  const [openModal, setOpenModal] = useState(false);
  const [moduleId, setModuleId] = useState<Key>(" ");

  return (
    <>
      <StartAlert
        isOpen={openModal}
        closeModal={() => setOpenModal(!openModal)}
        moduleId={moduleId}
        index={index}
      />
      <Container>
        <Navbar onClick={() => navigate("/home")} />
        <Header category="main" title={title} subtitle={subtitle} />

        <section>
          {simulations.map(
            (simulation: {
              id: Key;
              icon: string;
              label: string;
              color: string;
              index: string;
            }) => {
              return (
                <MenuButton
                  key={simulation.id}
                  label={simulation.label}
                  icon={getIcon(simulation.icon)}
                  color={simulation.color}
                  onclick={() => {
                    setOpenModal(true);
                    setModuleId(simulation.id);
                  }}
                />
              );
            },
          )}
        </section>

        <FloatButton />
      </Container>
    </>
  );
}
