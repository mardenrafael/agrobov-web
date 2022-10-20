interface SexoProps {
  label: string;
  value: string;
}

const Sexo: React.FC<SexoProps> = ({ label, value }) => {
  return (
    <>
      <div className="text-center bg-primary">
        <h3 className=" text-5xl font-bold text-slate-900">{value}</h3>
        <span className="text-xl font-light text-slate-800">{label}</span>
      </div>
    </>
  );
};

export default Sexo;
