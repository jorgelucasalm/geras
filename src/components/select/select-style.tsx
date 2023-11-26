import styled from "styled-components";

export const Main = styled.div`
  position: relative;

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

  & .prefix-icon-wrapper {
    position: absolute;
    z-index: 1;
    width: 3rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--blue-800);
  }

  & .ant-select .ant-select-selector {
    padding-left: 43px !important;
  }

  & .ant-select-arrow {
    display: none;
  }

  & .ant-select-selection-search > input {
    padding-left: 32px !important;
  }
`;
