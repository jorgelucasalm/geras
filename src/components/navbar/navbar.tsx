import { BsArrowLeftCircle } from "react-icons/bs";
import Logo from "../../assets/images/primary-logo.png";
import { Content } from "./navbar-style";

interface Props {
  onClick?: React.MouseEventHandler<SVGElement>;
}

export function Navbar({ onClick }: Props) {
  return (
    <Content>
      <BsArrowLeftCircle onClick={onClick} size={24} />
      <img src={Logo} />
    </Content>
  );
}
