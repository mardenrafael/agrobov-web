import { Divide } from "phosphor-react";
import React, { InputHTMLAttributes } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
  label?: string;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { icon, name, label, ...rest },
  ref
) => {
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
          ref={ref}
          id={name}
          className="flex flex-1 font-semibold text-md text-primary bg-transparent  outline-none  placeholder:text-light-primary placeholder:font-semibold "
          {...rest}
        />
      </div>
    </div>
  );
};

export default React.forwardRef(Input);
