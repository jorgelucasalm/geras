// https://www.npmjs.com/package/validator
declare module "validator/lib/isEmail" {
  function isEmail(value: string): boolean;
  export default isEmail;
}
