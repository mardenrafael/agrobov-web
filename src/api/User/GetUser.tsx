import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Ox } from "../Types/Ox";
import BASE_URL from "../utils/BaseUrl";
import TOKEN from "../utils/Token";

const User = () => {
    const [user, setUser] = useState<any>({})
    const getUser = async (userId: string) => {
       await axios.get(`${BASE_URL}user/${userId}`, {
        headers: {
            "Authorization": TOKEN
        }
        }).then((response) => setUser(response.data.result));
    }
    
    useEffect(() => {
        getUser("1")
        console.log(user.Ox);
        
    }, []);

    const oxList = user.Ox;

    return(
       <> 
        <div className="flex flex-col p-4 gap-8">
            <h2>User List</h2>
           <p>Produtor: {user.name}</p>
            <h3>Lista de Bois</h3>
            <ul>
               {console.log(oxList)}
               { oxList && oxList.map((ox: Ox, index: number) => {
                    <div key={index}>
                        <li>
                            brinco: {ox.earring};
                        </li>
                        <li>
                            sexo: {ox.genre};
                        </li>
                    </div>
                })}  
            </ul>
        </div>
       </>
    )
}
export default User