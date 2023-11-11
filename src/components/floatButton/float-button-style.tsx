import styled from "styled-components";

export const Content = styled.button`
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