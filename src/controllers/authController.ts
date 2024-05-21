import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth.service";

const registerController = async ({body}:Request, res: Response) => {
    const responseNewUser = await registerNewUser(body);
    res.send(responseNewUser);
}

const loginController = async ({body}:Request, res: Response) => {
    const {email, password} = body;
    const responseUser = await loginUser({email, password});

    if(responseUser === "Contraseña Incorrecta") {
        res.status(403);
        res.send(responseUser);
    } else {
        res.send(responseUser);
    }

    
}

export {registerController, loginController};