import { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props extends PropsWithChildren {
  width: string | number;
}

export function UserTextCard({ width, children }: Props) {
  return (
    <P $width={width} data-type="USER">
      {children}
    </P>
  );
}

const P = styled.p<{ $width: string | number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $width }) => (typeof $width === "number" ? `${$width}px` : $width)};
  padding: 1rem;

  border-radius: 1.5rem 1.5rem 0.25rem 1.5rem;
  border: 2px solid #1b66c9;
  background-color: #eaf4ff;
`;
