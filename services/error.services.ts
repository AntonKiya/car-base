import { Error } from "@app-types/interfaces";
import { ErrorName, StatusCode } from "@app-types/enums";

export class ErrorServices {
  constructor() {}

  getErrorInfo(e: unknown): Error {
    if (e instanceof Error) {
      const code = this.getErrorCodeByName(e.name);

      return {
        name: e.name,
        message: e.message,
        code,
      };
    }
    return {
      name: ErrorName.SERVER_ERROR,
      message: "Something went wrong",
      code: StatusCode.SERVER_ERROR,
    };
  }

  getErrorCodeByName(errorName: string): number {
    const errorKeys = Object.keys(ErrorName);
    const errorValues = Object.values(ErrorName);
    const errorIndex = errorValues.indexOf(errorName as ErrorName);
    const code = StatusCode[errorKeys[errorIndex] as unknown as StatusCode];

    return +code || StatusCode.SERVER_ERROR;
  }
}
