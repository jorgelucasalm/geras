import styled from "styled-components";

export const Main = styled.div`
  & > div > div {
    border-radius: 6.25rem !important;
    border: 1px solid var(--blue-800) !important;
  }

  & > span > input {
    color: var(--blue-800);
    font-size: 1rem;
  }

  & .ant-input-prefix {
    margin-right: 0.5rem;
  }

  & .ant-input-prefix > svg,
  .ant-input-suffix > svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--blue-800);
  }

  & .ant-input-suffix > svg:hover {
    cursor: pointer;
  }
`;
