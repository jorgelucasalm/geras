import { Button } from "@components/button/button";
import { Content } from "./bottombar-style";
import { Link } from "react-router-dom";

interface BottomBarProps {
  onclick?: () => void;
  preview: string;
  next: string;
}

export function BottomBar({ onclick, preview, next }: BottomBarProps) {
  return (
    <Content>
      <Button category={"secundary"}>
        <Link to={preview}>Anterior</Link>
      </Button>
      <Button onclick={onclick}>
        <Link to={next}>Próximo</Link>
      </Button>
    </Content>
  );
}
