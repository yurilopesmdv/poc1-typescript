import { Request, Response, NextFunction } from "express";
import { Error } from "../protocols/index";
import httpStatus from "http-status";

export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    const {type, message} = error
    if (error) {
        if(type === 'Conflict') return res.status(httpStatus.CONFLICT).send({message})
        if(type === 'NotFound') return res.status(httpStatus.NOT_FOUND).send({message})
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: 'Something went wrong :('})
    }
   next()

}