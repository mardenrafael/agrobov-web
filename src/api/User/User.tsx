import React, { PropsWithChildren, useEffect, useState } from "react";
import { TUserResponse } from "../Types/UserResponse";
import getUser from "../services/GetUser";
import Card from "../../components/Card/index"
import Header from "../../components/Header";
import { Ox } from "../Types/Ox";
import { notEqual } from "assert";

export default function User(props: PropsWithChildren) {
    
    const [data, setData] = useState<TUserResponse>()
    const [femaleOx, setFemaleOx] = useState([])
    const [maleOx, setMaleOx] = useState([])
    const [isLoading, setLoading] = useState(true)
    
    const oneMonth: Ox[] = [];
    const threeMonths: Ox[] = [];
    const sixMonths: Ox[] = [];
    const nineMonths: Ox[] = [];
    const oneYear: Ox[] = [];
    const moreOneYear: Ox[] = []
    
    useEffect(() => {
        getUser(props.email, props.token).
        then((user) => {
            setData(user.result);
            sortOx(user.result.Ox)
            const maleArr = user.result.Ox.filter((Ox) => getOxByGenre("Male", Ox));
            setMaleOx(maleArr);
            
            const femaleArr = user.result.Ox.filter((Ox) => getOxByGenre("Female", Ox));
            setFemaleOx(femaleArr)
            
            setLoading(false)
            
                        
        });

    }, [])

    if (isLoading) return <p> Loading...</p>

    function formatDate(date: Date) {
        const born_date = new Date(date)
        const formated_date = born_date.toLocaleDateString()
        return formated_date
    }

    function getMonthDiference(born_date: Date) {
        const now = new Date();
        const born_month = new Date(born_date);

        const month_diference = (now - born_month)/(1000 * 60 * 60 * 24 * 365);

        console.log(Number(month_diference.toFixed(1)));
        

        return Number(month_diference.toFixed(1))
        
    }

    function sortOx(OxList: Ox[]) {
        OxList.map((Ox) => {
           const month_diference = getMonthDiference(Ox.born_date);
           switch(month_diference) {
            case 0:
            case 0.1:
                oneMonth.push(Ox);
            break
            case 0.2:
            case 0.3:
                threeMonths.push(Ox);
            break
            case 0.4:
            case 0.5:
            case 0.6:
                sixMonths.push(Ox);
            break
            case 0.7:
            case 0.8:
            case 0.9:
                nineMonths.push(Ox);
            break
            case 1:
                oneYear.push(Ox);
            break
            default:
                moreOneYear.push(Ox);
            return
           } 
        })
    }

    function formatGenre(genre: string) {
        
        if(genre == "Male") {
            return "Macho"
        } else {
            return "Fêmea"
        }
    }

    function getOxByGenre(genre, Ox) {
        return Ox.genre == genre;
    }


    return(
        <div>

        <Header />
        <Card titulo="Total" machosQtd={maleOx.length} femeasQtd={femaleOx.length} />
        <Card titulo="1 mês ou menos"/>
            {/* <p>Nome: {data?.name}</p>
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
            </ul> */}
        </div>
    )
}