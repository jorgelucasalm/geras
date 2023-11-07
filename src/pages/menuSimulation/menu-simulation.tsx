import { Key } from "react";
import { useLocation } from "react-router-dom";

import { Header } from "@components/header/header";
import { Navbar } from "@components/navbar/navbar";
import { Container, FloatButton } from "./menu-simulation-style";
import { MenuButton } from "@components/menuButton/menu-button";
import Icon from "@assets/images/floatbutton.svg";
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

export function Simulation() {
  const location = useLocation();
  const { title, subtitle, simulations } = location.state;

  function getIcon(icon: string) {
    switch (icon) {
      case "GoPerson":
        return <GoPerson size={24} />;
      case "GoPersonAdd":
        return <GoPersonAdd size={24} />;
      case "GoCommentDiscussion":
        return <GoCommentDiscussion size={24} />;
      case "GoMoveToBottom":
        return <GoMoveToBottom size={24} />;
      case "GoMention":
        return <GoMention size={24} />;
      case "GoUnlock":
        return <GoUnlock size={24} />;
      case "GoKey":
        return <GoKey size={24} />;
      case "GoMilestone":
        return <GoMilestone size={24} />;

      case "BiCar":
        return <BiCar size={24} />;
      case "BiMapAlt":
        return <BiMapAlt size={24} />;
      case "BiSearch":
        return <BiSearch size={24} />;

      case "CiPizza":
        return <CiPizza size={24} />;

      default:
        return "x";
    }
  }

  return (
    <Container>
      <Navbar />
      <Header title={title} subtitle={subtitle} />

      <section>
        {simulations.map((simulation: { id: Key; icon: string; label: string, url: string}) => {
          return (
            <MenuButton
              key={simulation.id}
              label={simulation.label}
              url={simulation.url}
              icon={getIcon(simulation.icon)}
            />
          );
        })}
      </section>

      <FloatButton>
        <img src={Icon} />
      </FloatButton>
    </Container>
  );
}
