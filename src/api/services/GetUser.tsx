import BASE_URL from "../utils/BaseUrl";
import { TUserResponse } from "../Types/UserResponse";

export default async function getUser(email:string, token:string): Promise<TUserResponse>{
    console.log(token);
    
    const response = await fetch(`${BASE_URL}/user?email=${email}`, {
        headers: {
            Authorization: token,
        }
    }).then(res => res.json())
    return response
}