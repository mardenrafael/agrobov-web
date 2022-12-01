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
          <h1 className="font-bold text-primary text-2xl text-center">
            Entre em contato com o suporte através dos e-mails: {""} <br /> <br />
            lucas@agrobov.app.br <br /> <br />
            junior@agrobov.app.br <br /> <br />
            sarah@agrobov.app.br <br /> <br />
            mateus@agrobov.app.br <br /> <br />
            marden@agrobov.app.br <br /> <br />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NossoContato;
