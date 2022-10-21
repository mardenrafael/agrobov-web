import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonSexoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  sexo: "F" | "M";
  check?: boolean;
}

const ButtonSexo: React.FC<ButtonSexoProps> = ({ sexo, check, ...rest }) => {
  return (
    <>
      <button
        className={clsx("text-center bg-primary py-6 px-8 rounded-md", {
          "bg-yellou": check,
        })}
        {...rest}
      >
        <h3 className="text-6xl font-bold text-tercearia ">{sexo}</h3>
        <span className="text-xl font-light text-tercearia">
          {sexo === "F" ? "Femêa" : "Macho"}
        </span>
      </button>
    </>
  );
};

export default ButtonSexo;
