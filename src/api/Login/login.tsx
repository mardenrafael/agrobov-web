import { redirect } from "next/dist/server/api-utils";
import react, { PropsWithChildren, useState } from "react";
import User from "../User/GetUser";

export default function LoginForm() {
       const [email, setEmail] = useState("")
       const [password, setPassword] = useState("")

       const data = {
        email: email,
        password: password
       }
    
    async function getAuthorizationToken(data: FormData) {
        const TOKEN = await fetch("http://localhost:4000/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
            "Content-Type": "application/json"
            }
        }).then((res) => {
            return res.json()
        })
        
        const TOKEN_WITH_BEARER = `Bearer ${TOKEN.token}`

        console.log(TOKEN_WITH_BEARER);
        
        return TOKEN_WITH_BEARER
        
    }

    async function handleChange(event) {
    event.preventDefault()

    const { name, value }= event.target        
    if(name =="email") {
        setEmail(value)
    } else {
        setPassword(value)
    }

    console.log(data);
    
    }

    function handleSubmit() {
        const TOKEN = getAuthorizationToken(data);
        
        return(
            <>
                <User token={TOKEN}></User>
            </>
        )
        
    }

        return(
            <>
                <label htmlFor="email">
                    Email:
                    <input type="email" name="email" id="email" value={data.email} onChange={handleChange}/>    
                </label> 
                <br />   
                <label htmlFor="password">
                    Senha:
                    <input type="password" name="password" id="password" value={data.password} onChange={handleChange}/>
                </label>
                <br />
                <button onClick={handleSubmit}>
                    login    
                </button>           
            </>
        )
}