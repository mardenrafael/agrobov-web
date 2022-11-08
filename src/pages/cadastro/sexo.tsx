import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import BrincoInput from "../../components/BrincoInput";
import Button from "../../components/Button";
import ButtonVoltar from "../../components/ButtonVoltar";
import DesTela from "../../components/DesTela";
import Screen from "../../components/Screen";
import SexoInput from "../../components/SexoInput";
import { GeneroType, useCadastroBovino } from "../../context/cadastro-bovino";

const CadastroSexo = () => {
  const router = useRouter();
  const [value, setValue] = useState<GeneroType>();
  const { setDataByName } = useCadastroBovino();

  function handleSubmit() {
    const isOk = setDataByName("sexo", value);
    if (isOk) router.push("/cadastro/nascimento");
  }

  return (
    <Screen>
      <DesTela
        nome="Sexo"
        descricao="Clique no botão referente ao sexo do animal"
      />
      <div className="flex flex-col flex-1 items-center justify-center">
        <SexoInput onChange={(sex) => setValue(sex)} />
      </div>
      <div className="flex gap-4 p-4">
        <ButtonVoltar />
        <Button onClick={handleSubmit}>Próximo</Button>
      </div>
    </Screen>
  );
};

export default CadastroSexo;
