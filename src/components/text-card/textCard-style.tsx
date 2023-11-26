import styled from "styled-components";

export const P = styled.p<{ width?: string | number }>`
  width: ${({ width }) => (width ? (typeof width === "number" ? `${width}px` : width) : "100%")};
  max-width: 18.5rem;
  background-color: var(--orange-200);
  border: 2px solid var(--orange-400);
  padding: 1rem;
  border-radius: 1.5rem 1.5rem 1.5rem 0.25rem;
  color: var(--black-600);
  font-style: normal;
  font-weight: 400;
`;
