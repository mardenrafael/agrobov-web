import axios  from "axios";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { Ox } from "../Types/Ox";
import BASE_URL from "../utils/BaseUrl";
import TOKEN from "../utils/Token";


type TUserResponse = {
    name: string;
    brand: string;
    Ox: Ox[]
}

export default function User(props: PropsWithChildren) {
    
    const [data, setData] = useState<TUserResponse>()
    const [isLoading, setLoading] = useState(true)


    useEffect(() => {
        fetch(BASE_URL, {
            headers: {
                Authorization: TOKEN,
            }
        })
        .then((res) => {            
            return res.json()
        })
        .then((data) => {
            console.log(data);
            

            setData(data.result)
            setLoading(false)
        })
    }, [])

    if (isLoading) return <p> Loading...</p>


    return(
        <div>
            <p>Nome: {data?.name}</p>
            <p>Marca: {data?.brand}</p>

            <ul>
                {data?.Ox.map(Ox => {
                    return (
                        <li key={Ox.earring}>
                            Brinco: {Ox.earring}
                            Genero: {Ox.genre}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}