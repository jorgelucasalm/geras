import { Select } from "antd";
import { Main } from "./select-style";

export function MainSelect() {
  return (
    <Main>
      <Select
        placeholder={"Gênero"}
        style={{
          width: 296,
          height: 48,
          borderRadius: 100,
        }}
        onChange={() => {}}
        options={[
          { value: "m", label: "Masculino" },
          { value: "f", label: "Feminino" },
          { value: "o", label: "Outro" },
        ]}
      />
    </Main>
  );
}
