import { FiArrowLeft } from "react-icons/fi";
import styled from "styled-components";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function LoginBackButton({ onClick }: Props) {
  return (
    <Button onClick={onClick}>
      <FiArrowLeft />
    </Button>
  );
}

const Button = styled.button`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 2.4rem;
  border: 2px solid var(--dark-blue);
  background-color: #fff;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--dark-blue);
  }
`;
