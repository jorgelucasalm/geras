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
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  border: 2px solid var(--blue-800);
  background-color: #fff;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--blue-800);
  }
`;
