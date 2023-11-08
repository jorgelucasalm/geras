import { Link } from "react-router-dom";
import SimulationsData from "./simulations.json";

export function Menu() {
  const simulations = SimulationsData;

  return (
    <>
      <h1>Tela inicial</h1>
      <button>
        <Link
          to={"/mensagem"}
          state={{
            simulations: simulations[0],
            index: 0,
            title: "Mensagens",
            subtitle: "Pratique como navegar em seus aplicativos favoritos.",
          }}
        >
          Mensagens
        </Link>
      </button>

      <button>
        <Link
          to={"/email"}
          state={{
            simulations: simulations[1],
            index: 1,
            title: "E-mail",
            subtitle: "Pratique como usar a sua conta de e-mail.",
          }}
        >
          E-mail
        </Link>
      </button>

      <button>
        <Link
          to={"/alimentacao"}
          state={{
            simulations: simulations[2],
            index: 2,
            title: "Alimentação",
            subtitle: "Pratique como pedir comida por aplicativos.",
          }}
        >
          Alimentação
        </Link>
      </button>

      <button>
        <Link
          to={"/transporte"}
          state={{
            simulations: simulations[3],
            index: 3,
            title: "Transporte",
            subtitle: "Pratique como navegar em seus aplicativos de transporte favoritos.",
          }}
        >
          Transporte
        </Link>
      </button>
    </>
  );
}
