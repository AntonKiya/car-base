import { ErrorName } from "@app-types/enums";

class ServerErrorError extends Error {
  constructor(message: string) {
    super(message);
    this.name = ErrorName.SERVER_ERROR;
  }
}

export { ServerErrorError };
