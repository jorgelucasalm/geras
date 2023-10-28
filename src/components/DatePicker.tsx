import {
  DatePicker as AntdDatePicker,
  DatePickerProps as AntDatePickerProps,
  InputProps,
} from "antd";
import IMask from "imask";
import moment from "moment";
import { AiOutlineCalendar } from "react-icons/ai";
import styled from "styled-components";

// const MASKED = IMask.createMask<any>({
//   blocks: {
//     DD: { from: 1, mask: IMask.MaskedRange, to: 31 },
//     MM: { from: 1, mask: IMask.MaskedRange, to: 12 },
//     YYYY: { from: 1900, mask: IMask.MaskedRange, to: Number.MAX_VALUE },
//   },
//   format: (date: Date) => moment(date).format(DATE_FORMAT),
//   mask: Date,
//   parse: (date: string) => moment(date, DATE_FORMAT),
//   pattern: DATE_FORMAT,
// });

// export type DatePickerProps = Omit<AntDatePickerProps, "format" | "picker" | "onKeyDown">;

interface Props {
  width: string | number;
  height: string | number;
  prefix?: React.ReactNode;
}

export default function DatePicker({ width, height, prefix }: any) {
  const DATE_FORMAT = "DD/MM/YYYY" as string;
  return (
    <Input $width={width} $height={height}>
      <DatePicker
        format={DATE_FORMAT}
        placeholder={DATE_FORMAT.toLowerCase()}
        picker="date"
        prefix={prefix}
      />
    </Input>
  );
}

const Input = styled.div<{ $width: Props["width"]; $height: Props["height"] }>`
  width: max-content;

  & > div {
    border-radius: 10rem;
    border: 1px solid var(--dark-blue) !important;

    width: ${({ $width }) => (typeof $width === "number" ? `${$width}px` : $width)};
    height: ${({ $height }) => (typeof $height === "number" ? `${$height}px` : $height)};
  }

  & > div > div > input {
    color: var(--dark-blue) !important;
    font-size: 5rem;
  }

  & .ant-input-prefix {
    margin-right: 0.8rem;
  }

  & .ant-input-prefix > svg,
  .ant-input-suffix > svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--dark-blue);
  }

  & .ant-input-suffix > svg:hover {
    cursor: pointer;
  }
`;
