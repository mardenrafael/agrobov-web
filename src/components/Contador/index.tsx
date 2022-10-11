interface Props {
  label: string;
  value: number;
}

const Contador: React.FC<Props> = ({ label, value }) => {
  return (
    <>
      <div className="text-center">
        <span className="text-xl font-light text-slate-800">{label}</span>
        <h3 className=" text-5xl font-bold text-slate-900">{value}</h3>
      </div>
    </>
  );
};

export default Contador;
