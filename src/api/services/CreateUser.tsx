import BASE_URL from "../utils/BaseUrl";
import { api } from "./api";

interface IUser {
  name: string;
  email: string;
  password: string;
}

export default async function createUser(user: IUser) {
  const res = await api.post(`/user`, user);
  return res.data;
}
