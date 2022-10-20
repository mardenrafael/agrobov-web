import axios  from "axios";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { Ox } from "../Types/Ox";
import BASE_URL from "../utils/BaseUrl";
import TOKEN from "../utils/Token";


type TUserResponse = {
    name: string;
    brand: string;
    email: string;
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

    function formatDate(date: Date) {
        const born_date = new Date(date)
        const formated_date = born_date.toLocaleDateString()
        return formated_date
    }


    return(
        <div>
            <p>Nome: {data?.name}</p>
            <p>Marca: {data?.brand}</p>
            <p>E-mail: {data?.email}</p>

            <h2>Lista de Bois</h2>
            <ul>
                {data?.Ox.map(Ox => {
                    
                    return (
                        <li key={Ox.earring}>
                            Brinco: {Ox.earring}
                            <br />
                            Genero: {Ox.genre}
                            <br />
                            Data de Nascimento: {formatDate(Ox.born_date)}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}