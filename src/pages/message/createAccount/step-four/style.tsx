import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  .ant-form-item-control-input-content {
    display: flex;
  }

  .ant-form-item-explain {
    width: 11.75rem;
    margin: 0 auto;
    text-align: center;
  }

  > h1,
  h2 {
    margin: 0 auto;
    color: var(--blue-800);
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
  }

  > .new-code {
    background-color: transparent;
    border: none;
    text-decoration: underline;
    margin-top: 1rem;
    cursor: pointer;
    color: var(--blue-600);
    font-size: 1.125rem;
  }
`;
