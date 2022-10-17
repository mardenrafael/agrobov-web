import Brinco from "../../components/Brinco";
import Header from "../../components/Header";

const CadastroBrinco = () => {
  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <Header titulo="Cadastro Brinco" />
        <h2 className="font-bold px-4 text-xl lg:text-2xl mt-4">
          Nº do Brinco
        </h2>
        <h4 className="text-md px-4 lg:text-xl">
          Digite o número do brinco do animal
        </h4>
        <div className="flex flex-col w-full items-center">
          <Brinco />
        </div>
      </div>
    </>
  );
};

export default CadastroBrinco;
