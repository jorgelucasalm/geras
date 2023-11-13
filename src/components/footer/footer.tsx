import Anchor from "@components/anchor/anchor";
import { Container } from "./footer-style";

interface Props {
  previousToUrl: string;
  nextToUrl: string;
  onClickPrevious?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickNext?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function Footer({ previousToUrl, nextToUrl, onClickNext, onClickPrevious }: Props) {
  return (
    <Container>
      <Anchor onClick={onClickPrevious} category="secondary" to={previousToUrl} width={136}>
        Anterior
      </Anchor>
      <Anchor onClick={onClickNext} category="primary" to={nextToUrl} width={136}>
        Próximo
      </Anchor>
    </Container>
  );
}
