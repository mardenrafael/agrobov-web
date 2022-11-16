import { Ox } from "../Types/Ox";
import { api } from "./api";

export default async function createOx(ox: Ox, userId: number, token: string) {
  const res = await api.post(`/user/${userId}/ox`, ox, {
    headers: { Authorization: token },
  });

  return res.data as Ox;
}
