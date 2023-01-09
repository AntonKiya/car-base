import { ErrorName } from "@app-types/enums";

class BadRequestError extends Error {
  constructor(message: string) {
    super(message);
    this.name = ErrorName.BAD_REQUEST;
  }
}

export { BadRequestError };
