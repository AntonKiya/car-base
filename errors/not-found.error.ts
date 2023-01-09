import { ErrorName } from "@app-types/enums";

class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = ErrorName.NOT_FOUND;
  }
}

export { NotFoundError };
