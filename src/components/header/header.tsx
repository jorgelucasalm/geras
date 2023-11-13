import { Content, StepContent } from "./header-style";

interface HeaderProps {
  line?: boolean;
  title: string;
  subtitle: string;
  category: "main" | "step";
}

export function Header({ title, subtitle, category }: HeaderProps) {
  return (
    <>
      {category === "main" && (
        <Content>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </Content>
      )}
      {category === "step" && (
        <StepContent>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </StepContent>
      )}
    </>
  );
}
