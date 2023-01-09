import { ValidationError } from "express-validator";

interface Error {
  name: string;
  message: string;
  errorList?: Array<ValidationError>;
  code: number;
}

export { Error };
