import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEventHandler, useRef, useState } from "react";
import BrincoInput from "../../components/BrincoInput";
import Button from "../../components/Button";
import ButtonVoltar from "../../components/ButtonVoltar";
import DesTela from "../../components/DesTela";
import Screen from "../../components/Screen";
import { useCadastroBovino } from "../../context/cadastro-bovino";

const CadastroBrinco = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>();

  const { setDataByName } = useCadastroBovino();

  function handleSubmit() {
    const isOk = setDataByName("numBrinco", inputRef.current?.value);
    if (isOk) router.push("/cadastro/sexo");
  }

  return (
    <Screen>
      <DesTela
        nome="Nº do Brinco"
        descricao="Digite o número do brinco do animal"
      />
      <div className="flex flex-1 items-center justify-center">
        <BrincoInput ref={inputRef as any} autoFocus required />
      </div>
      <div className="flex gap-4 p-4">
        <ButtonVoltar />
        <Button onClick={handleSubmit}>Prôximo</Button>
      </div>
    </Screen>
  );
};

export default CadastroBrinco;
