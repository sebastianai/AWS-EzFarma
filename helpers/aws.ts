import { AdminGetUserCommand, AdminGetUserCommandOutput, GetUserCommand, GetUserCommandOutput } from "@aws-sdk/client-cognito-identity-provider";
import aws from "AWS";

export const getUser = async(token:string,pool?:string):Promise<AdminGetUserCommandOutput | null> => {
    try {
        const cognito = aws.Cognito;
        const username = await cognito.send(new GetUserCommand({
            AccessToken:token
        }))
        const user = await cognito.send(new AdminGetUserCommand({
            Username:username.Username,
            UserPoolId:process.env.POOL_ID
        }))
        return user
    } catch (error) {
     return null   
    }
}