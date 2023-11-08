import { Button } from "@components/button/button";
import { Content } from "./bottombar-style";

interface BottomBarProps {
  onclick?: () => void;
}

export function BottomBar({ onclick }: BottomBarProps) {
  return (
    <Content>
      <Button category={"secundary"}>Anterior</Button>
      <Button onclick={onclick}>Próximo</Button>
    </Content>
  );
}
