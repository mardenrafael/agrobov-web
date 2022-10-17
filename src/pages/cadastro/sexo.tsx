import Brinco from "../../components/Brinco";
import Header from "../../components/Header";

const CadastroSexo = () => {
  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <Header titulo="Cadastro Brinco" />
        <h2 className="font-bold px-4 text-xl lg:text-2xl mt-4">Sexo</h2>
        <h4 className="text-md px-4 lg:text-xl">
          Clique no botão referente ao sexo do animal
        </h4>
        <div className="flex flex-col w-full items-center"></div>
      </div>
    </>
  );
};

export default CadastroSexo;
