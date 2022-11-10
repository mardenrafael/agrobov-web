import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import CreateOx from "../api/services/CreateOx";
import { Ox } from "../api/Types/Ox";
import { AuthContext } from "./auth";
import { parseCookies } from "nookies";

export type GeneroType = "Male" | "Female";

interface CadastroBovinoFormulario {
  numBrinco: number;
  sexo: GeneroType;
  dataNascimento: Date;
}
interface CadastroBovinoData {
  data: CadastroBovinoFormulario;
  setDataByName(name: keyof CadastroBovinoFormulario, value: any): boolean;
  submit: () => Promise<{ message: string }>;
}

const CadastroBovino = createContext<CadastroBovinoData>(
  {} as CadastroBovinoData
);

export const CadastroBovinoProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [data, setData] = useState<CadastroBovinoFormulario>(
    {} as CadastroBovinoFormulario
  );

  const { user } = useContext(AuthContext);
  const { "agrobov.token": token } = parseCookies();

  function setDataByName(name: keyof CadastroBovinoFormulario, value: any) {

    if (!value) {
      toast("Preencha o campo para prosseguir.", { type: "error" });
      return false;
    }
    setData((data) => ({ ...data, [name]: value }));

    return true;
  }

  async function submit() {
    const newOx: Ox = {
      earring: String(data.numBrinco),
      born_date: data.dataNascimento,
      genre: data.sexo
    };
    
    await CreateOx(newOx, user.id, token);
    
    return { message: "Operação realizada com sucesso!" };
  }

  return (
    <CadastroBovino.Provider value={{ data, setDataByName, submit }}>
      {children}
    </CadastroBovino.Provider>
  );
};

export function useCadastroBovino() {
  return useContext(CadastroBovino);
}
