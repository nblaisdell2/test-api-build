import { Request, Response, NextFunction } from "express";
import { Message } from "../model/Message";

export const helloWorld = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  let customMessage: Message = {
    msg: "Hello - version 3",
  };
  res.status(200).json({ customMessage });
};
