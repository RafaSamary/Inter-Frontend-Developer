import { NextFunction, Request, Response, Router } from "express";
import { buffer } from "stream/consumers";
import ForbiddenError from "../models/erros/forbidden.error.models";
import userRepositorie from "../repositories/user.repositorie";
import JWT from 'jsonwebtoken';


const authorizationRouter = Router();

authorizationRouter.post('/token', async (req: Request, res: Response, next: NextFunction) => {

    try { 
          const authorizationHeader = req.headers['authorization'];

          if(!authorizationHeader){
          throw new ForbiddenError('Credenciais não informadas', Error);         
     }

        // TIPO DE AUTORIZAÇÃO  =  BASIC YWRTA46.....

       const [authenticationType, token]   =  authorizationHeader.split(' ');
              if(authenticationType !== 'Basic' || !token){
                  throw new ForbiddenError('Tipo de authenticação inválido', Error);
              }

              const tokenContent = Buffer.from(token, 'base64').toString('utf-8');
              const[usename, password] = tokenContent.split(':');

              if(!usename || !password){
                throw new ForbiddenError('Credenciais não informadas', Error);
              }

              const user = await userRepositorie.findByUsernameAndPassword(usename, password);
                 if(!user){
                    throw new ForbiddenError('Usuário ou senha inválidos', Error);
                 }

                const jwtPayload = {usename: user.usename};
                const jwtOptions = {subject: user.uuid};
                const secretKey = 'my_secret_key';

                const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);
                res.status(200).json({ token: jwt});

    } catch (error) {
        next(error);
    } 
    
});

export default authorizationRouter;