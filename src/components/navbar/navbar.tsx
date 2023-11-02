import { BsArrowLeftCircle } from "react-icons/bs";
import Logo from "../../assets/images/primary-logo.png";
import { Content } from "./navbar-style";

export function Navbar() {
  return (
    <Content>
      <BsArrowLeftCircle size={24} /> {/*como fazer funcionar? */}
      <img src={Logo} />
    </Content>
  );
}
