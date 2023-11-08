import { Key, useState } from "react";
import { useLocation } from "react-router-dom";

import { Header } from "@components/header/header";
import { Navbar } from "@components/navbar/navbar";
import { Container } from "./menu-simulation-style";
import { MenuButton } from "@components/menuButton/menu-button";

import { Alert } from "@components/alert/alert";

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
  const { title, subtitle, simulations } = location.state;

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
  const [simulationId, setSimulationId] = useState<Key>(" ");

  return (
    <>
      <Alert
        isOpen={openModal}
        closeModal={() => setOpenModal(!openModal)}
        simulationId={simulationId}
      />
      <Container>
        <Navbar />
        <Header title={title} subtitle={subtitle} />

        <section>
          {simulations.map(
            (simulation: { id: Key; icon: string; label: string; index: string; url: string }) => {
              return (
                <MenuButton
                  key={simulation.id}
                  label={simulation.label}
                  url={simulation.url}
                  icon={getIcon(simulation.icon)}
                  onclick={() => {setOpenModal(true); setSimulationId(simulation.id)}}
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
