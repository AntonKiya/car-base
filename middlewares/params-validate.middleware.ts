import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { ErrorName, StatusCode } from "@app-types/enums";
import { Error } from "@app-types/interfaces";

function paramsValidateMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const error: Error = {
      name: ErrorName.BAD_REQUEST,
      message: "Not correct params in the request",
      errorList: validationErrors.array(),
      code: StatusCode.BAD_REQUEST,
    };

    res.status(StatusCode.BAD_REQUEST).json({ error });
    return;
  }

  next();
}

export { paramsValidateMiddleware };
