import styled from "styled-components";

// interface NavProps {
//   category?: string;
// }

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 4rem;

  box-shadow: 0px 4px 4px 0px #00000019;
  background: var(--blue-100);
  width: 100%;
  padding: 0.5rem 0;

  div {
    display: flex;
    gap: 1rem;
    max-width: 22.5rem;
  }

  img {
    width: 1.5rem;
    margin: 0 2rem;
  }
  svg {
    margin: 0 2rem;
  }
`;
