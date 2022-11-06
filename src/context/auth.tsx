import React, { useContext, useState } from "react";
import CreateUser from "../api/services/CreateUser";
import { toast } from "react-toastify";
import getUser from "../api/services/GetUser";
import GetLogin from "../api/services/login";
import { TUserResponse } from "../api/Types/UserResponse";

interface AuthContextData {
  user?: TUserResponse;
  token?: string;
  login(email?: string, senha?: string): Promise<void>;
  cadastra(nome?: string, email?: string, senha?: string): Promise<void>;
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

  async function cadastra(nome?: string, email?: string, senha?: string) {
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
    const user = {
      name: nome,
      email: email,
      password: senha,
    }
    await CreateUser(user);
    await login(email, senha);
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
