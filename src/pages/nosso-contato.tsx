import React, { FormEvent, useRef } from "react";
import IconBoy from "../components/IconBoy";

const NossoContato: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-screen w-screen">
      <div className="flex flex-col justify-center h-full w-full p-4 max-w-screen-sm ">
        <div className="flex flex-col items-center justify-center mb-7">
          <div className="flex flex-col items-center justify-center mb-5">
            <IconBoy fill="#276852" width={96} height={96} />
          </div>
          <h1 className="font-bold text-primary text-2xl">
            Entre em contato com o suporte atraves do email {""}
            agrobov@gmail.com
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NossoContato;
