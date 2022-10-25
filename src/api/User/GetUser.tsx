import React, { PropsWithChildren, useEffect, useState } from "react";
import { TUserResponse } from "../Types/UserResponse";
import getUser from "../services/GetUser"

export default function User(props: PropsWithChildren) {
    
    const [data, setData] = useState<TUserResponse>()
    const [isLoading, setLoading] = useState(true)


    useEffect(() => {
        getUser("zoiofatalmode@gmail.com", props.token).
        then((user) => {
        console.log(user);
        setData(user.result);
        setLoading(false)
        });

    }, [])

    if (isLoading) return <p> Loading...</p>

    function formatDate(date: Date) {
        const born_date = new Date(date)
        const formated_date = born_date.toLocaleDateString()
        return formated_date
    }

    function formatGenre(genre: string) {
        
        if(genre == "Male") {
            return "Macho"
        } else {
            return "Fêmea"
        }
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
                            Genero: {formatGenre(Ox.genre)}
                            <br />
                            Data de Nascimento: {formatDate(Ox.born_date)}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}