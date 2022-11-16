import { api } from "./api";

export default async function getLogin(email?: string, password?: string) {
  const res = await api.post("/login", {
    email: email,
    password: password,
  });

  const data = res.data;

  const tokenWithBearer = `Bearer ${data.token}`;
  return tokenWithBearer;
}
