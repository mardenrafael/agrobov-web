import React, { useEffect, useState } from "react";
import { differenceInMonths } from "date-fns";
import { TUserResponse } from "../Types/UserResponse";
import getUser from "../services/GetUser";
import Card from "../../components/Card/index"
import { Ox } from "../Types/Ox";
import { useAuth } from "../../context/auth";

export default function User() {
    
    const [updatedUser, setupdatedUser] = useState<TUserResponse>({} as TUserResponse)
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
            setupdatedUser(user);
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

    sortOx(updatedUser.Ox)

    return(
        <div>
            <Card titulo="Total" oxList={updatedUser.Ox} />
            <br />
            <Card titulo="Até 1 mês de idade" oxList={oneMonth} />
            <br />
            <Card titulo="Entre 2 e 3 meses de idade" oxList={threeMonths} />
            <br />
            <Card titulo="Entre 4 e 6 meses de idade" oxList={sixMonths} />
            <br />
            <Card titulo="Entre 7 e 9 meses de idade" oxList={nineMonths} />
            <br />
            <Card titulo="Entre 10 meses e 1 ano de idade" oxList={oneYear} />
            <br />
            <Card titulo="Mais de 1 ano de idade" oxList={moreOneYear} />
        </div>
    )
}