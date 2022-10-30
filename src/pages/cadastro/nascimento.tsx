import { useRef } from "react";
import Button from "../../components/Button";
import ButtonVoltar from "../../components/ButtonVoltar";
import DesTela from "../../components/DesTela";
import Screen from "../../components/Screen";
import { useCadastroBovino } from "../../context/cadastro-bovino";
import { parse } from "date-fns";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const CadastroNascimento = () => {
  const router = useRouter();
  const nascimentoRef = useRef<HTMLInputElement>();
  const { setDataByName, submit } = useCadastroBovino();

  async function handleSubmit() {
    const value = nascimentoRef.current?.value;

    const dataNascimento = parse(value!, "yyyy-MM-dd", new Date());
    // coloca no contexto
    setDataByName("dataNascimento", dataNascimento);
    // contexto coloca no banco
    try {
      const res = await submit();
      toast(res.message, { type: "success" });
      router.push("/dashboard");
    } catch (error: any) {
      toast(error.message, { type: "error" });
    }
  }

  return (
    <Screen>
      <DesTela
        nome="Dia do nascimento"
        descricao="Digite o dia em que o animal nasceu"
      />
      <div className="flex flex-1 justify-center items-center mt-6 px-4">
        <input
          ref={nascimentoRef as any}
          type="date"
          required
          className="border-2 border-secundaria rounded text-center text-5xl py-4 w-full"
          placeholder="DD/MM/YYYY"
        />
      </div>
      <div className="flex gap-4 p-4">
        <ButtonVoltar />
        <Button onClick={handleSubmit}>Salvar</Button>
      </div>
    </Screen>
  );
};

export default CadastroNascimento;
