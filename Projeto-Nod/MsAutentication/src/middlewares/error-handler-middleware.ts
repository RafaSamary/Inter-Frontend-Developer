import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "pg";



function errorHandler(error: any, req:Request, res: Response, next: NextFunction){
    if (error instanceof DatabaseError){
        res.status(400).send('BAD_REQUEST');
    }else{
        res.status(500).send('Internal Server Error');
    }
}
export default errorHandler;