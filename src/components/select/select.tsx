import { Select, SelectProps } from "antd";
import { Main } from "./select-style";
import { ReactNode } from "react";

interface Props {
  options: { value: string; label: string }[];
  onChange?: (e: string) => any;
  isSearch?: boolean;
  placeholder?: string | undefined;
  prefixIcon?: ReactNode;
}

export function MainSelect({ prefixIcon, options, isSearch, onChange, ...rest }: Props) {
  return (
    <Main>
      {prefixIcon && <div className="prefix-icon-wrapper">{prefixIcon}</div>}
      <Select
        showSearch={isSearch}
        style={{
          width: 296,
          height: 48,
          borderRadius: 100,
        }}
        onChange={onChange}
        options={options}
        filterOption={(input, option) =>
          (option?.label.toLocaleLowerCase() ?? "").includes(input.toLocaleLowerCase())
        }
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())
        }
        {...rest}
      />
    </Main>
  );
}
