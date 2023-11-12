import { DatePicker as AntdDatePicker } from "antd";
import { PickerDateProps } from "antd/es/date-picker/generatePicker";
import { Dayjs } from "dayjs";
import { AiOutlineCalendar } from "react-icons/ai";
import styled from "styled-components";

interface Props extends PickerDateProps<Dayjs> {
  width: string | number;
  height: string | number;
}

export default function DatePicker({ width, height, ...rest }: Props) {
  const DATE_FORMAT = "DD/MM/YYYY";
  return (
    <Input $width={width} $height={height}>
      <AntdDatePicker
        format={DATE_FORMAT}
        placeholder={DATE_FORMAT.toLowerCase()}
        suffixIcon={<AiOutlineCalendar />}
        allowClear={false}
        {...rest}
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

  & .ant-picker-input {
    flex-direction: row-reverse;
  }

  & .ant-picker-input > span {
    margin: 0 8px 0 0;
  }

  & .ant-picker-input > span > svg {
    width: 24px;
    height: 24px;
    color: var(--dark-blue) !important;
  }
`;
