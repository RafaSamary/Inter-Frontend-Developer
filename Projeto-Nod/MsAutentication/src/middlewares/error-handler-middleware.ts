import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "pg";
import ForbiddenError from "../models/erros/forbidden.error.models";



function errorHandler(error: any, req:Request, res: Response, next: NextFunction){
    if (error instanceof DatabaseError){
        res.status(400).send('BAD_REQUEST');
    }else if (error instanceof ForbiddenError){
        res.status(400).send('FORBIDDEN');
    }
    else{
        res.status(500).send('Internal Server Error');
    }
}
export default errorHandler;