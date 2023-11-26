import styled from "styled-components";
import { Upload as AntdUpload } from "antd";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
`;

export const DivButton = styled.div`
  height: 28px;

  > svg {
    width: 28px;
    height: 28px;
    color: var(--blue-600);
  }

  > .loading-icon {
    -webkit-animation: spin 1s linear infinite;
    -moz-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
  }

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const Upload = styled(AntdUpload)`
  display: flex !important;
  flex-direction: column;
  align-items: center;

  .ant-upload {
    background-color: var(--blue-100) !important;
    border: none !important;
    border-radius: 50%;
  }
`;

export const DivModalBody = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    color: black;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 16px;
  }
`;
