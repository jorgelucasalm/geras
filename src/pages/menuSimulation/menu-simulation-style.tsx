import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    max-width: 24rem;
  }
`;

export const FloatButton = styled.button`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background: none;
  border: none;
  transition: all .2s ease-in-out;

  img {
    width: 90%;
  }

  &:hover {
    bottom: 2.5rem;
    transition: all .2s ease-in-out;
  }
`;
