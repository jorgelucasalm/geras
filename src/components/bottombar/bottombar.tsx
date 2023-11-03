import { Button } from "@components/button/button";
import { Content } from "./bottombar-style";

export function BottomBar() {
  return (
    <Content>
      <Button category={"secundary"}>Anterior</Button>
      <Button>Próximo</Button>
    </Content>
  );
}
