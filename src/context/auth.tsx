import React, { useContext, useState } from "react";
import CreateUser from "../api/services/CreateUser";
import { toast } from "react-toastify";
import getUser from "../api/services/GetUser";
import GetLogin from "../api/services/login";
import { TUserResponse } from "../api/Types/UserResponse";

interface AuthContextData {
  user?: TUserResponse;
  token?: string;
<<<<<<< HEAD
  login(email?: string, senha?: string): Promise<void>;
  cadastra(nome?: string, email?: string, senha?: string): Promise<void>;
=======
  login(email?: string, senha?: string): Promise<boolean>;
  cadastra(nome?: String, email?: String, senha?: String): Promise<boolean>;
>>>>>>> 95715d3ab6ae8bd540655c0ea7258c64963ce554
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<TUserResponse>();
  const [token, setToken] = useState<string>();

  async function login(email?: string, senha?: string) {
    if (!email) {
      toast("Email é um campo obrigatório", { type: "error" });
      return false;
    }
    if (!senha) {
      toast("Senha é um campo obrigatório", { type: "error" });
      return false;
    }

    const tokenLogin = await GetLogin(email, senha);
    setToken(tokenLogin);
    const userSigned = await getUser(email, tokenLogin);
    setUser(userSigned);

    return true;
  }
<<<<<<< HEAD

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
=======
  async function cadastra(nome?: string, email?: string, senha?: string) {
    if (!nome) {
      toast("Nome é um campo obrigatório", { type: "error" });
      return false;
    }
    if (!email) {
      toast("Email é um campo obrigatório", { type: "error" });
      return false;
    }
    if (!senha) {
      toast("Senha é um campo obrigatório", { type: "error" });
      return false;
>>>>>>> 95715d3ab6ae8bd540655c0ea7258c64963ce554
    }
    const user = {
      name: nome,
      email: email,
      password: senha,
<<<<<<< HEAD
    }
    await CreateUser(user);
    await login(email, senha);
=======
    };
    await CreateUser(user);
    await login(email, senha);

    return true;
>>>>>>> 95715d3ab6ae8bd540655c0ea7258c64963ce554
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
