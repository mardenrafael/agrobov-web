import React, { useContext, useState } from "react";
import getUser from "../api/services/GetUser";
import GetLogin from "../api/services/login";
import { TUserResponse } from "../api/Types/UserResponse";
interface AuthContextData {
  user?: TUserResponse;
  token?: string;
  login(email: string, senha: string): Promise<void>;
  cadastra(nome: String, email: String, senha: String): Promise<void>;
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<TUserResponse>();
  const [token, setToken] = useState<string>();

  async function login(email: string, senha: string) {
    const tokenLogin = await GetLogin(email, senha);
    setToken(tokenLogin);
    const userSigned = await getUser(email, tokenLogin);
    setUser(userSigned);
  }
  async function cadastra(nome: String, email: String, senha: String) {}

  return (
    <AuthContext.Provider value={{ user, token, login, cadastra }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
