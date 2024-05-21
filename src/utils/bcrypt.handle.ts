import {hash, compare} from "bcryptjs"

const encrypt = async (pass: string) => {
    const passwordHash = await hash(pass, 8);
    return passwordHash;
}

const verify = async (pass: string, passHash:string) => {
    const isEqual = await compare(pass, passHash);
    return isEqual; //retornará un booleano
}

export {encrypt, verify}