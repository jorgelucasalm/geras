import Logo from "@assets/images/primary-logo.png";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  backButtonUrl: string;
  orangeBar?: boolean;
}

export function HeaderMenu({ backButtonUrl, orangeBar }: Props) {
  return (
    <Nav $orangeBar={orangeBar}>
      <Link to={backButtonUrl}>
        <FiChevronLeft size={24} />
      </Link>

      <img src={Logo} />
    </Nav>
  );
}

const Nav = styled.nav<{ $orangeBar?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 4rem;

  box-shadow: ${({ $orangeBar }) => ($orangeBar ? "none" : "0px 4px 4px 0px #00000019")};
  border-bottom: ${({ $orangeBar }) => ($orangeBar ? "4px solid var(--orange-400)" : "none")};
  background: var(--blue-100);
  width: 100%;
  padding: 0.5rem 0;

  img {
    width: 1.5rem;
    margin: 0 2rem;
  }

  > a {
    margin: 0 2rem;
  }
`;
