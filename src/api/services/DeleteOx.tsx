import { api } from "./api";
import { parseCookies } from "nookies";
import { Ox } from "../Types/Ox";

export default async function DeleteOx(ox: Ox) {
  const oxId = ox.id
  const { "agrobov.token": token } = parseCookies();
  const res = await api.delete(`/user/ox`, {
    headers: {Authorization: token},
    data: {
      id: oxId
    }
  });
  console.log(res);
  return res.data;
}