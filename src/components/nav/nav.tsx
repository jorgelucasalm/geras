import { BsArrowLeftCircle } from "react-icons/bs";
import { Nav } from "./nav-style";
import Logo from "../../assets/images/primary-logo.png";

// interface ButtonProps {
//   children: any;
//   category?: string;
// }

export function Navbar() {
  return (
    <Nav>
      <BsArrowLeftCircle size={24} /> {/*como fazer funcionar? */}
      <img src={Logo} />
    </Nav>
  );
}
