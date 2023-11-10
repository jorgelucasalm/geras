import { Footer as FooterStyle } from "./footer-style";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export function Footer({ children }: Props) {
  return <FooterStyle>{children}</FooterStyle>;
}
