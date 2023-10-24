import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 96vh;

  img {
    width: 80%;
    max-width: 10rem;
    min-height: 8rem;
    animation: loading 2s linear infinite;

    @keyframes loading {
      0% {
        transform: scale(1);
      }

      50% {
        transform: scale(1.1);
      }

      100% {
        transform: scale(1);
      }
    }
  }

  p {
    color: var(--blue-800);
    font-weight: bold;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 1rem;
    margin-right: -1rem; //corrigir gambiarra depois
  }
`;
