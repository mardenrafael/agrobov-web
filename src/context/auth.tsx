import React, { useContext, useState } from "react";
<<<<<<< HEAD
import CreateUser from "../api/services/CreateUser";
=======
import { toast } from "react-toastify";
>>>>>>> dd9c43d5d810d59de8f7f2223d2f9d42298b8d73
import getUser from "../api/services/GetUser";
import GetLogin from "../api/services/login";
import { TUserResponse } from "../api/Types/UserResponse";

interface AuthContextData {
  user?: TUserResponse;
  token?: string;
  login(email?: string, senha?: string): Promise<void>;
  cadastra(nome?: String, email?: String, senha?: String): Promise<void>;
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<TUserResponse>();
  const [token, setToken] = useState<string>();

  async function login(email?: string, senha?: string) {
    if (!email) {
      toast("Email é um campo obrigatório", { type: "error" });
      return;
    }
    if (!senha) {
      toast("Senha é um campo obrigatório", { type: "error" });
      return;
    }

    const tokenLogin = await GetLogin(email, senha);
    setToken(tokenLogin);
    const userSigned = await getUser(email, tokenLogin);
    setUser(userSigned);
  }
<<<<<<< HEAD
  async function cadastra(nome: string, email: string, senha: string) {
    const user = {
      name: nome,
      email: email,
      password: senha,
    }
    await CreateUser(user);
    await login(email, senha);
=======
  async function cadastra(nome?: String, email?: String, senha?: String) {
    if (!nome) {
      toast("Nome é um campo obrigatório", { type: "error" });
      return;
    }
    if (!email) {
      toast("Email é um campo obrigatório", { type: "error" });
      return;
    }
    if (!senha) {
      toast("Senha é um campo obrigatório", { type: "error" });
      return;
    }
>>>>>>> dd9c43d5d810d59de8f7f2223d2f9d42298b8d73
  }

  return (
    <AuthContext.Provider value={{ user, token, login, cadastra }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
