import { Link } from "react-router-dom";
import SimulationsData from "./simulations.json";
import { Container } from "./menu-style";
import { MenuButton } from "@components/menuButton/menu-button";
import { Navbar } from "@components/navbar/navbar";
import { CiAt, CiPizza } from "react-icons/ci";
import {
  PiBroadcastLight,
  PiCarLight,
  PiChatDotsLight,
  PiGearLight,
  PiStarLight,
} from "react-icons/pi";
import { Header } from "@components/header/header";
import { GoQuestion } from "react-icons/go";

import Logo from "@assets/images/secundary-logo.png";

export function Menu() {
  const simulations = SimulationsData;

  return (
    <Container>
      <nav>
        <div>
          <img src={Logo} />
        </div>
      </nav>
      <Header title="Vamos praticar?" subtitle="" category={"main"} />

      <section>
        <Link
          to={"/email"}
          state={{
            simulations: simulations[1],
            index: 1,
            title: "E-mail",
            subtitle: "Pratique como usar a sua conta de e-mail.",
          }}
        >
          <MenuButton color={"pink"} label="E-mail" icon={<CiAt size={40} />} />
        </Link>
        <Link
          to={"/mensagem"}
          state={{
            simulations: simulations[0],
            index: 0,
            title: "Mensagens",
            subtitle: "Pratique como navegar em seus aplicativos favoritos.",
          }}
        >
          <MenuButton color={"green"} label="Mensagem" icon={<PiChatDotsLight size={40} />} />
        </Link>

        <Link
          to={"/alimentacao"}
          state={{
            simulations: simulations[2],
            index: 2,
            title: "Alimentação",
            subtitle: "Pratique como pedir comida por aplicativos.",
          }}
        >
          <MenuButton color={"orange"} label="Alimentação" icon={<CiPizza size={40} />} />
        </Link>

        <Link
          to={"/transporte"}
          state={{
            simulations: simulations[3],
            index: 3,
            title: "Transporte",
            subtitle: "Pratique como navegar em seus aplicativos de transporte favoritos.",
          }}
        >
          <MenuButton label="Transporte" icon={<PiCarLight size={40} />} />
        </Link>
      </section>

      <footer>
        <div>
          <span>
            <Link to={"/"}>
              <PiStarLight size={28} />
            </Link>
          </span>

          <span>
            <Link to={"/"}>
              <PiBroadcastLight size={28} />
            </Link>
          </span>

          <span>
            <Link to={"/"}>
              <PiGearLight size={28} />
            </Link>
          </span>

          <span>
            <Link to={"/"}>
              <GoQuestion size={28} />
            </Link>
          </span>
        </div>
      </footer>
    </Container>
  );
}
