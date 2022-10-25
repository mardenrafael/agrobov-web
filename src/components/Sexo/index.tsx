import { clsx } from "clsx";
import { useState } from "react";
import ButtonSexo from "../ButtonSexo";

const Sexo: React.FC = () => {
  const [selected, setSelected] = useState("");
  return (
    <>
      <div className="flex flex-row gap-10">
        <ButtonSexo
          sexo="M"
          name="sexo"
          id="sexom"
          onClick={() => setSelected("M")}
          check={selected == "M"}
        />
        <ButtonSexo
          sexo="F"
          name="sexo"
          id="sexof"
          onClick={() => setSelected("F")}
          check={selected == "F"}
        />
      </div>
    </>
  );
};

export default Sexo;
