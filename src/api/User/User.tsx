import React, { useEffect, useState } from "react";
import { differenceInMonths } from "date-fns";
import { TUserResponse } from "../Types/UserResponse";
import getUser from "../services/GetUser";
import Card from "../../components/Card/index"
import { Ox } from "../Types/Ox";
import { useAuth } from "../../context/auth";

export default function User() {
    
    const [data, setData] = useState<TUserResponse>()
    const [isLoading, setLoading] = useState(true)
    
    const oneMonth: Ox[] = [];
    const threeMonths: Ox[] = [];
    const sixMonths: Ox[] = [];
    const nineMonths: Ox[] = [];
    const oneYear: Ox[] = [];
    const moreOneYear: Ox[] = []
    const { user, token } = useAuth();
    useEffect(() => {
        getUser(user.email, token).
        then((user) => {
            setData(user);
            setLoading(false);         
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

        const month_diference = differenceInMonths(now, born_month);
        
        console.log(month_diference);
        

        return month_diference;
        
    }

    async function sortOx(OxList: Ox[]) {
        OxList.map((Ox) => {
           const month_diference = getMonthDiference(Ox.born_date);
            switch(month_diference) {
            case 0:
            case 1:
                oneMonth.push(Ox);
            break
            case 2:
            case 3:
                threeMonths.push(Ox);
            break
            case 4:
            case 5:
            case 6:
                sixMonths.push(Ox);
            break
            case 7:
            case 8:
            case 9:
                nineMonths.push(Ox);
            break
            case 10:
            case 11:
            case 12:
                oneYear.push(Ox);
            break
            default:
                moreOneYear.push(Ox);
            return
           } 
        })
    }

    sortOx(user?.Ox)

    return(
        <div>
            <Card titulo="Total" oxList={user.Ox} />
            <Card titulo="até 1 mês de idade" oxList={oneMonth} />
            <Card titulo="entre 2 e 3 meses de idade" oxList={threeMonths} />
            <Card titulo="entre 4 e 6 meses de idade" oxList={sixMonths} />
            <Card titulo="entre 7 e 9 meses de idade" oxList={nineMonths} />
            <Card titulo="entre 10 meses e 1 ano de idade" oxList={oneYear} />
            <Card titulo="mais de 1 ano de idade" oxList={moreOneYear} />
        </div>
    )
}