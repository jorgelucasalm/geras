const dddMask = (value: string) =>
  value
    .replace(/\D/g, "") //Remove tudo o que não é dígito
    .replace(/(\d{1})/, "+$1")
    .replace(/(\d{2})\d+?$/, "$1");

const phoneMask = (value: string) =>
  value
    .replace(/\D/g, "") //Remove tudo o que não é dígito
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d)(\d{1})(\d)/, "$1 $2$3")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");

const codeMask = (value: string) =>
  value
    .replace(/\D/g, "") //Remove tudo o que não é dígito
    .replace(/(\d{3})(\d)/, "$1 $2")
    .replace(/(\d{3})\d+?$/, "$1");

export { dddMask, phoneMask, codeMask };
