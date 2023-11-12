import { P } from "./textCard-style";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  width?: string | number;
}

export default function TextCard({ width, children, ...rest }: Props) {
  return (
    <P width={width} {...rest}>
      {children}
    </P>
  );
}
