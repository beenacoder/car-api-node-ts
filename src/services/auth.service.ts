import { User } from "../interfaces/user.interface";
import { Auth } from "../interfaces/auth.interface";
import UserModel from "../models/userSchema";
import { encrypt, verify } from "../utils/bcrypt.handle";

const registerNewUser = async ({email, password, name}: User) => {
    const checkIs = await UserModel.findOne({email});
    if(checkIs) return "Usuario existe"
    //encriptamos la contraseña
    const passHash = await encrypt(password);

    //Pasamos al registro el password con la nueva cadena de string
    const registerNewUser =  await UserModel.create({email, password: passHash, name})
    return registerNewUser;
}

const loginUser = async ({email, password}: Auth) => {
    const checkIs = await UserModel.findOne({email});
    if(!checkIs) return "Usuario no existe"

    const passwordHash = checkIs.password; //Encriptado
    const isCorrect = await verify(password, passwordHash);

    if(!isCorrect) return "Contraseña Incorrecta"

    return checkIs;
}

export {registerNewUser, loginUser};