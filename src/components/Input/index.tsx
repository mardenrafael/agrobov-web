import { Divide } from "phosphor-react";
import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
  label?: string;
}

const Input: React.FC<Props> = ({ icon, name, label, ...rest }) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="text-md text-primary font-semibold pb-2"
        >
          {label}
        </label>
      )}
      <div className="flex items-center gap-3 h-12 py-4 px-3 rounded w-full border-2 border-primary  focus-within:ring-2 ring-yellow-600">
        {icon}
        <input
          id={name}
          className="flex flex-1 font-semibold text-md text-hover-primary bg-transparent  outline-none  placeholder:text-primary placeholder:font-semibold "
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
