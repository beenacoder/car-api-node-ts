import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth.service";

const registerController = async ({body}:Request, res: Response) => {
    const responseNewUser = await registerNewUser(body);
    res.send(responseNewUser);
}

const loginController = async (req:Request, res: Response) => {
    
}

export {registerController, loginController};