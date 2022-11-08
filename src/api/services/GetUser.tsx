import BASE_URL from "../utils/BaseUrl";
import { TUserResponse } from "../Types/UserResponse";

export default async function getUser(email:string, token:string): Promise<TUserResponse>{
    const response = await fetch(`${BASE_URL}/user?email=${email}`, {
        headers: {
            Authorization: token,
        }
    }).then(res => res.json());
    console.log(response);
    
    return response
}