import { Ox } from "../Types/Ox";
import BASE_URL from "../utils/BaseUrl";

export default async function CreateOx(Ox: Ox, userId: number, token: string) {
    const ox: Promise<Ox> = await fetch(`${BASE_URL}/user/${userId}/ox`, {
      method: "POST",
      body: JSON.stringify(Ox),
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
    }
    }).then((res) => {
      return res.json();
    }).catch((err) => {
      console.log(err);
      return err
    })
    return ox
}