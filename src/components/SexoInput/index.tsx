import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { GeneroType } from "../../context/cadastro-bovino";
import ButtonSexo from "../ButtonSexo";

interface SexoInputProps {
  onChange?: (selected?: GeneroType) => void;
}

const SexoInput: React.FC<SexoInputProps> = ({ onChange }) => {
  const [selected, setSelected] = useState<GeneroType>();

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [onChange, selected]);

  return (
    <>
      <div className="flex flex-row gap-10">
        <ButtonSexo
          sexo="M"
          name="sexo"
          id="sexom"
          onClick={() => setSelected("Male")}
          check={selected == "Male"}
        />
        <ButtonSexo
          sexo="F"
          name="sexo"
          id="sexof"
          onClick={() => setSelected("Female")}
          check={selected == "Female"}
        />
      </div>
    </>
  );
};

export default SexoInput;
