interface DesTelaProps {
  nome: string;
  descricao: string;
}

const DesTela: React.FC<DesTelaProps> = ({ nome, descricao }) => {
  return (
    <>
      <h2 className="font-bold px-4 text-xl lg:text-2xl mt-4 text-secundaria">
        {nome}
      </h2>
      <h4 className="text-md px-4 lg:text-xl text-secundaria">{descricao}</h4>
    </>
  );
};

export default DesTela;
