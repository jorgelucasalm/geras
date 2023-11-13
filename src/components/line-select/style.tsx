import styled from "styled-components";

export const DivInput = styled.div`
  > input {
    border: 1px solid black;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-radius: 0px;
  }

  > input:focus {
    box-shadow: none;
  }

  > input::placeholder {
    color: black;
    opacity: 0.7;
  }
`;
