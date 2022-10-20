interface DesTelaProps {
  nome: string;
  descricao: string;
}

const DesTela: React.FC<DesTelaProps> = ({ nome, descricao }) => {
  return (
    <>
      <h2 className="font-bold px-4 text-xl lg:text-2xl mt-4">Nº do Brinco</h2>
      <h4 className="text-md px-4 lg:text-xl">
        Digite o número do brinco do animal
      </h4>
    </>
  );
};

export default DesTela;
