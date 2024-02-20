import { Content } from "./float-button-style";
import Icon from "@assets/images/floatbutton.svg";
import { Link } from "react-router-dom";

export function FloatButton() {
  return (
    <Content>
      <Link to={"/suporte"}>
        <img src={Icon} />
      </Link>
    </Content>
  );
}
