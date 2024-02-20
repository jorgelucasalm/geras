import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  padding: 2.625rem 2rem;
  max-width: 22.5rem;
  max-height: 50rem;
`;

export const Title = styled.h1`
  color: var(--blue-800);
  font-size: 1.5rem;
  margin: 0 auto;
  margin-top: 1.125rem;
  margin-bottom: 3.5rem;
  width: max-content;
`;

export const FormDiv = styled.div<{ $rememberPasswordChecked: boolean }>`
  & .ant-row.ant-form-item-row {
    margin: 0 auto;
    width: max-content;
  }

  & .ant-form-item-label {
    padding-bottom: 0.125rem;
  }

  & .ant-form-item-label > label {
    color: var(--blue-800);
  }

  & .ant-checkbox-wrapper > span:last-child {
    color: ${({ $rememberPasswordChecked }) =>
      $rememberPasswordChecked ? "#53a2ff" : "var(--blue-800)"};
    font-size: 1.6rem;
    transform: translateY(1px);
  }

  & .ant-checkbox-inner {
    width: 2rem;
    height: 2rem;
    border: 1px solid
      ${({ $rememberPasswordChecked }) =>
        $rememberPasswordChecked ? "#53a2ff" : "var(--blue-800)"};

    &::after {
      transform: rotate(45deg) scale(1) translate(-50%, -60%);
    }
  }

  & .ant-input-affix-wrapper-status-error {
    border-color: #ff4d4f !important;
  }

  & .ant-picker {
    border: 1px solid var(--blue-800) !important;
  }

  & .ant-picker-input > span {
    color: var(--blue-800);
  }
`;
