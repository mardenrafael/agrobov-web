import Contador from "../Contador";
import { useState, useEffect } from "react";
import { Ox } from "../../api/Types/Ox";
import getOxByGenre from "../../utils/sortOxByGenre";

interface Props {
  titulo: string;
  oxList: Ox[];
}

const Card: React.FC<Props> = ({ titulo, oxList }) => {
  const [femaleOx, setFemaleOx] = useState<Ox[]>([]);
  const [maleOx, setMaleOx] = useState<Ox[]>([]);
  const maleArr = oxList.filter((Ox) => getOxByGenre("Male", Ox));
  const femaleArr = oxList.filter((Ox) => getOxByGenre("Female", Ox));

  useEffect(() => {
    setMaleOx(maleArr);
    setFemaleOx(femaleArr);
  },[maleArr, femaleArr]);

  return (
    <div className="border rounded-md  overflow-hidden"
    style={
      {
        width: "80%",
        margin:"0 auto"
      }
      }>
      <div className="bg-primary p-1">
        <h2 className="text-center font-light text-xl text-teal-50 ">
          {titulo}
        </h2>
      </div>
      <div className="flex justify-evenly  py-4">
        <Contador label="Machos" value={maleArr.length} />
        <Contador label="Fêmeas" value={femaleArr.length} />
        <Contador label="Total" value={oxList.length} />
      </div>
    </div>
  );
};

export default Card;
