import Contador from "../Contador";

interface Props {
  titulo: string;
  machosQtd: number;
  femeasQtd: number;
}

const Card: React.FC<Props> = ({ titulo, femeasQtd, machosQtd }) => {
  const total = femeasQtd + machosQtd;

  return (
    <div className="border rounded-md  overflow-hidden">
      <div className="bg-primary p-1">
        <h2 className="text-center font-light text-xl text-teal-50 ">
          {titulo}
        </h2>
      </div>
      <div className="flex justify-evenly  py-4">
        <Contador label="Machos" value={machosQtd} />
        <Contador label="Fêmeas" value={femeasQtd} />
        <Contador label="Total" value={total} />
      </div>
    </div>
  );
};

export default Card;
