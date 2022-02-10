import { Request, Response} from 'express';

import UserService from './user.service';

export default class UserController {

    
    async signin (req: Request, res: Response) {
        const {email, password} = req.body;
        const userService = new UserService();
        const users = await userService.signin({email, password}); // BUSCA O USUSRIO 
        return res.status(200).send(users)                                // RETORNA 
    }

    async signup (req: Request, res: Response) {
        const userService = new UserService();
        const users = await userService.signup(req.body);
        return res.status(201).send(users)
    }

    async me (req: Request, res: Response) {
        const userService = new UserService();
        const user = await userService.me(req.user);

        return res.status(201).send(user)
    }
}