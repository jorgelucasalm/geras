import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 4rem;

    box-shadow: 0px 4px 4px 0px #00000019;
    background: var(--blue-100);
    width: 100%;
    padding: 3rem 0 1rem;

    div {
      width: 20%;
    }

    img {
      width: 10rem;
    }
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    max-width: 24rem;
  }

  footer {
    position: absolute;
    bottom: 0;
    height: 6rem;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    background: #fff;
    box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.1);

    div {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 20%;
      height: 100%;
      min-width: 18.75rem;
      padding: 0.5rem;
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 3rem;
    height: 3rem;
    background-color: var(--blue-100);
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: var(--blue-400);
      color: var(--white);
      transition: all 0.2s ease-in-out;

      margin-bottom: 1rem;
    }
  }
`;
