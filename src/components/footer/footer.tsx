import { Footer as FooterStyle } from "./footer-style";
import { Button } from "@components/button/button";

export function Footer() {
  return (
    <FooterStyle>
      <div>
        <Button category="secundary">Anterior</Button>
        <Button>Proximo</Button>
      </div>
    </FooterStyle>
  );
}
