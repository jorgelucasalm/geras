import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 96vh;
  gap: 1rem;

  img {
    width: 80%;
    max-width: 5rem;
    animation: loading 2s linear infinite;
    margin-bottom: 1.4rem;

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

  h1 {
    color: var(--blue-800);
    font-weight: bold;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: .2rem;
  }

  button {
    margin-top: 1rem;
  }
`;
