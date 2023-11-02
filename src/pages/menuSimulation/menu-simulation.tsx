import { Header } from "@components/header/header";
import { Navbar } from "@components/navbar/navbar";
import { Container, FloatButton } from "./menu-simulation-style";
import { MenuButton } from "@components/menuButton/menu-button";
import { useLocation } from "react-router-dom";
import Icon from "@assets/images/floatbutton.svg";

const itens = [
  {
    id: "1",
    icon: "x",
    label: "1",
  },
  {
    id: "2",
    icon: "x",
    label: "2",
  },
  {
    id: "3",
    icon: "x",
    label: "3",
  },
  {
    id: "4",
    icon: "x",
    label: "4",
  },
];

export function MenuSimulation() {
  return (
    <Container>
      <Navbar />
      <Header title="Mensagens" subtitle="Pratique como navegar em seus aplicativos favoritos" />

      <section>
        {itens.map((item) => {
          return <MenuButton key={item.id} icon={item.icon} label={item.label} />;
        })}
      </section>

      <FloatButton>
        <img src={Icon} />
      </FloatButton>
    </Container>
  );
}

// Implementação futura
// export function Navigation() {
//   const location = useLocation();
//   const { icon, label, url } = location.state;

//   return (
//     <Container>
//       <Navbar />
//       <Header title="Vamos começar?" subtitle="Passos" />

//       <section>
//         {itens.map((icon: any, label: string, index: number) => {
//           return <MenuButton key={index} icon={icon} label={label} />;
//         })}
//       </section>
//     </Container>
//   );
// }
