import Brinco from "../../components/Brinco";
import DesTela from "../../components/DesTela";
import Header from "../../components/Header";
import Sexo from "../../components/Sexo";

const CadastroSexo = () => {
  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <Header titulo="Cadastro Brinco" />
        <DesTela
          nome="Sexo"
          descricao="Clique no botão referente ao sexo do animal"
        />
        <div className="flex flex-col w-full h-full items-center justify-center">
          <Sexo />
        </div>
      </div>
    </>
  );
};

export default CadastroSexo;
