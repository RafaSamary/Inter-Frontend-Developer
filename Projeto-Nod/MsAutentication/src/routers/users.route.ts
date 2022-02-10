// get / users
// get / users/ uuid
// post / users
// put / users/ uuid
// delete / users/ uuid

import { Router, Request, Response, NextFunction } from "express";
import userRepositorie from "../repositories/user.repositorie";


const usersRouters = Router();

usersRouters.get('/users', async(req: Request, res:Response, next: NextFunction) =>{

     const users = await userRepositorie.findAllUsers();
     res.status(200).json(users);

});

usersRouters.get('/users/:uuid', async(req: Request<{uuid: string}>, res:Response, next: NextFunction) =>{
    try {
        const uuid = req.params.uuid;
        const users = await userRepositorie.findById(uuid);
        res.status(200).send({users});
    } catch (error) {
        next(error);
    }

    
});

usersRouters.post('/users', async (req: Request, res:Response, next: NextFunction) =>{
    const newUser = req.body;
    const uuid = await userRepositorie.create(newUser);
    res.status(200).send(uuid);
});

usersRouters.put('/users/:uuid', async (req: Request<{uuid: string}>, res:Response, next: NextFunction) =>{

    const uuid = req.params.uuid;
    const modifieldUser = req.body;

    modifieldUser.uuid = uuid;

    await userRepositorie.update(modifieldUser);
    res.status(200).send();
});

usersRouters.delete('/users/:uuid', async (req: Request<{uuid: string}>, res:Response, next: NextFunction) =>{
    
    const uuid = req.params.uuid;
    await userRepositorie.remove(uuid)
    res.status(200);
});
export default usersRouters;