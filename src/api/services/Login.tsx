import BASE_URL from "../utils/BaseUrl";

export default async function GetLogin(email: string | undefined, password: string | undefined) {
       const data = {
        email: email,
        password: password
       }

       const TOKEN = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
            "Content-Type": "application/json"
            }
        }).then((res) => {
            return res.json()
        })
        
    const TOKEN_WITH_BEARER = `Bearer ${TOKEN.token}`
    return TOKEN_WITH_BEARER;
}