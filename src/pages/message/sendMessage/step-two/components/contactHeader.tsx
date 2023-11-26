import styled from "styled-components";
import { UserContactWithIcon } from "../../step-one";
import { FaVideo } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

interface Props {
  selectedContact: UserContactWithIcon;
}

export function ContactHeader({ selectedContact }: Props) {
  const { first_name, last_name } = selectedContact;
  const contactNameInPascalCase = `${
    first_name[0].toUpperCase() + first_name.slice(1).toLowerCase()
  } ${last_name[0].toUpperCase() + last_name.slice(1).toLowerCase()}`;

  return (
    <>
      <ContactHeaderDiv>
        <div id="contact">
          <img src={selectedContact.icon} />
          <p>{contactNameInPascalCase}</p>
        </div>

        <div id="icons">
          <FaVideo />
          <FaPhone />
        </div>
      </ContactHeaderDiv>
    </>
  );
}

const ContactHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > #contact {
    display: flex;
    column-gap: 0.75rem;
    align-items: center;
  }

  > #icons {
    display: flex;
    column-gap: 1rem;

    > svg {
      width: 1.25rem;
      height: 1.25rem;
      color: var(--blue-600);
    }
  }
`;
