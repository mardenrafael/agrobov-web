import React, { useContext, useState, useEffect } from "react";
import createUser from "../api/services/CreateUser";
import { toast } from "react-toastify";
import getUser from "../api/services/GetUser";
import getLogin from "../api/services/Login";
import { TUserResponse } from "../api/Types/UserResponse";
import { setCookie, parseCookies } from "nookies";

interface AuthContextData {
  user: TUserResponse;
  token: string;
  login(email?: string, senha?: string): Promise<boolean>;
  cadastrar(
    nome?: string,
    email?: string,
    senha?: string
  ): Promise<true | void>;
}

export const AuthContext = React.createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<TUserResponse>({} as TUserResponse);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const { "agrobov.token": token } = parseCookies();
    const { "agrobovUser.email": email } = parseCookies();
    if (token) {
      getUser(email, token).then((user) => {
        setUser(user);
      });
    }
  }, []);

  async function login(email?: string, senha?: string) {
    if (!email) {
      toast("Email é um campo obrigatório", { type: "error" });
      return false;
    }
    if (!senha) {
      toast("Senha é um campo obrigatório", { type: "error" });
      return false;
    }

    try {
      const tokenLogin = await getLogin(email, senha);

      if (!tokenLogin) {
        return false;
      }
      setToken(tokenLogin);
      setCookie(undefined, "agrobovUser.email", email);
      setCookie(undefined, "agrobov.token", tokenLogin, {
        expire: 60 * 60 * 24,
      });

      const userSigned = await getUser(email, tokenLogin);

      if (!userSigned) {
        return false;
      }

      setUser(userSigned);
    } catch (error) {
      console.log("login", error);
      toast("Erro ao realizar login!", { type: "error" });

      return false;
    }

    return true;
  }

  async function cadastrar(nome?: string, email?: string, senha?: string) {
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
    };
    await createUser(user);
    await login(email, senha);

    return true;
  }

  return (
    <AuthContext.Provider value={{ user, token, login, cadastrar }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
