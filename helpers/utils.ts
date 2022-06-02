import {compareTwoStrings} from 'string-similarity';
export const compareStrings = (string1:string,string2:string) =>{
    return compareTwoStrings(string1,string2)
}