import { Modal as AntdModal, ModalProps } from "antd";
import styled from "styled-components";

interface Props extends ModalProps {
  headerTitle: string;
  headerSubTitle: string;
}

export default function ConfirmationModal({
  headerTitle,
  headerSubTitle,
  children,
  ...rest
}: Props) {
  return (
    <Modal {...rest} centered={rest.centered ?? true} closable={rest.closable ?? false}>
      <header className="modal-header">
        <h1>{headerTitle}</h1>
        <p>{headerSubTitle}</p>
      </header>
      {children}
    </Modal>
  );
}

const Modal = styled(AntdModal)`
  .ant-modal-content {
    padding: 2.5rem 1.5rem;
  }

  .ant-modal-footer {
    display: none;
  }

  .modal-header {
    position: absolute;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    justify-content: center;
    align-items: center;
    width: 22.5rem;
    height: 6.125rem;
    left: -16px;
    top: -152px;
    background-color: var(--black-400);
    border-top: 4px solid var(--orange-400);
    color: #fff;

    > h1 {
      font-size: 20px;
    }

    > p {
      font-size: 16px;
      color: #fff;
      font-weight: 400;
    }
  }
`;
