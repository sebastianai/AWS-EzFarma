import {compareSync, genSaltSync, hashSync} from 'bcrypt';

export const encryptPassword = (password:string):string => {
    const salt = genSaltSync(10);
    const hashedPassword = hashSync(password,salt);
    return hashedPassword
}

export const comparePassword = (password:string,hashedPsasword:string):boolean => {
    return compareSync(password,hashedPsasword);
}