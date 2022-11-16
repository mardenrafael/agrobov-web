import { TUserResponse } from "../Types/UserResponse";
import { api } from "./api";

export default async function getUser(email: string, token: string) {
  const res = await api.get(`/user`, {
    params: { email: email },
    headers: {
      Authorization: token,
    },
  });

  return res.data as TUserResponse;
}
