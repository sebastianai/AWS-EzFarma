export const getAccessToken = (cookies:Object,req:any) =>{
    const access_token = Object.entries(cookies).find(([key,value]) => {
        return key.includes('accessToken')
    })?.[1]
    req.token = access_token;
    return true
}