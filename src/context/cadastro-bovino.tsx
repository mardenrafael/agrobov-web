import React, { createContext, useContext, useState } from "react";

export type GeneroType = "M" | "F";

interface CadastroBovinoFormulario {
  numBrinco: number;
  sexo: GeneroType;
  dataNascimento: Date;
}
interface CadastroBovinoData {
  data: CadastroBovinoFormulario;
  setDataByName(name: keyof CadastroBovinoFormulario, value: any): void;
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

  function setDataByName(name: keyof CadastroBovinoFormulario, value: any) {
    setData((data) => ({ ...data, [name]: value }));
  }

  async function submit() {
    // AQUI VAI A REQUISICAO DA API

    console.log("data", data);

    return { message: "Opecao realizada com sucesso!" };
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
