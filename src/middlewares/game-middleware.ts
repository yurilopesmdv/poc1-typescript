import { NextFunction, Request, Response } from "express";
import { GameCreated } from "../protocols/index";
import { ObjectSchema } from "joi";
import httpStatus from "http-status";

export function validateGame(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body)
        if(validation.error) {
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({error: validation.error.message})
        }
        next()
    }
}