import { LinkProps } from "react-router-dom";
import { AnchorLink } from "./anchor-style";

interface AnchorProps extends LinkProps {
  category: "primary" | "secondary";
  width?: string | number;
  height?: string | number;
}

export default function Anchor({ category, width, height, children, ...rest }: AnchorProps) {
  return (
    <AnchorLink category={category} width={width} height={height} {...rest}>
      {children}
    </AnchorLink>
  );
}
