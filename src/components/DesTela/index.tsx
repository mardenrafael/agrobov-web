interface DesTelaProps {
  nome: string;
  descricao: string;
}

const DesTela: React.FC<DesTelaProps> = ({ nome, descricao }) => {
  return (
    <div className="px-4 pt-4">
      <h2 className="font-bold text-2xl lg:text-2xl  text-secondary">
        {nome}
      </h2>
      <h4 className="text-md lg:text-xl text-secondary">{descricao}</h4>
    </div>
  );
};

export default DesTela;
