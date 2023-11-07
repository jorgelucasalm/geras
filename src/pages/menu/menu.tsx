import { Link } from "react-router-dom";

export function Menu() {
  const simulations = [
    [
      {
        id: "1",
        icon: "GoPerson",
        label: "Criar conta",
        url: "/mensagem/criar-contato"
      },
      {
        id: "2",
        icon: "GoPersonAdd",
        label: "Novo contato",
        url: "/"
      },
      {
        id: "3",
        icon: "GoCommentDiscussion",
        label: "Enviar mensagem",
        url: "/"
      },
      {
        id: "4",
        icon: "GoMoveToBottom",
        label: "Instalação",
        url: "/"
      },
    ],
    [
      {
        id: "1",
        icon: "GoMention",
        label: "Criar conta",
        url: "/"
      },
      {
        id: "2",
        icon: "GoUnlock",
        label: "Esqueci minha senha",
        url: "/"
      },
      {
        id: "3",
        icon: "GoKey",
        label: "Acessar conta",
        url: "/"
      },
    ],
    [
      {
        id: "1",
        icon: "GoPerson",
        label: "Entrar",
        url: "/"
      },
      {
        id: "2",
        icon: "BiSearch",
        label: "Pesquisar",
        url: "/"
      },
      {
        id: "3",
        icon: "CiPizza",
        label: "Fazer Pedido",
        url: "/"
      },
      {
        id: "4",
        icon: "GoMoveToBottom",
        label: "Instalação",
        url: "/"
      },
    ],
    [
      {
        id: "1",
        icon: "GoMilestone",
        label: "Novo destino",
        url: "/"
      },
      {
        id: "2",
        icon: "BiCar",
        label: "Veículo",
        url: "/"
      },
      {
        id: "3",
        icon: "BiMapAlt",
        label: "Solicitar viagem",
        url: "/"
      },
      {
        id: "4",
        icon: "GoMoveToBottom",
        label: "Instalação",
        url: "/"
      },
    ],
  ];

  console.log(simulations)

  return (
    <>
      <h1>Tela inicial</h1>
      <button>
        <Link
          to={"/mensagem"}
          state={{
            simulations:simulations[0],
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
            simulations:simulations[1],
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
            simulations:simulations[2],
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
            simulations:simulations[3],
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
