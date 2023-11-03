import { GoPerson, GoPersonAdd } from "react-icons/go";
import { Link } from "react-router-dom";

export function Menu() {
  const messages = [
    {
      id: "1",
      icon: <GoPerson />,
      label: "Criar conta",
    },
    {
      id: "2",
      icon: <GoPersonAdd />,
      label: "Novo contato",
    },
    {
      id: "3",
      icon: "x",
      label: "Enviar mensagem",
    },
    {
      id: "4",
      icon: "x",
      label: "Instalação",
    },
  ];
  console.log(messages);

  const email = [
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

  return (
    <>
      <h1>Tela inicial</h1>
      <button>
        <Link
          to={"/mensagem"}
          state={{
            messages,
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
            email,
            title: "E-mail",
            subtitle: "Pratique como usar a sua conta de e-mail.",
          }}
        >
          E-mail
        </Link>
      </button>
    </>
  );
}
