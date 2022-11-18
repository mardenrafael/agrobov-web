import { Ox } from "../Types/Ox";
import { api } from "./api";
import BASE_URL from "../utils/BaseUrl";
import { parseCookies } from "nookies";

export default async function DeleteOx(ox: Ox) {
  console.log(ox);
  
  const { "agrobov.token": token } = parseCookies();
  // const deletedOx = await api.delete(`${BASE_URL}/user/ox`, {
  //   headers: {
  //     "content": "application/json",
  //     "body": ox.id,
  //     "Authorization": token 
  //   }
  // }).then((res) => {
  //   return res.data;
  // });
  // console.log(deletedOx);
  
}