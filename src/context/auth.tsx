import React, { useContext, useState } from "react";

interface User {
  id: string;
  email: string;
  nome: string;
}

interface AuthContextData {
  user?: User;
  login(email: String, senha: String): Promise<void>;
  cadastra(nome: String, email: String, senha: String): Promise<void>;
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>();

  async function login(email: String, senha: String) {}
  async function cadastra(nome: String, email: String, senha: String) {}

  return (
    <AuthContext.Provider value={{ user, login, cadastra }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
