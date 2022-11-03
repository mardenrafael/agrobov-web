import { Envelope, Lock } from "phosphor-react";
import React from "react";
import Button from "../components/Button";
import IconBoy from "../components/IconBoy";
import Input from "../components/Input";

// import { Container } from './styles';

const CriarConta: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-screen w-screen">
      <div className="flex flex-col justify-center h-full w-full p-4 max-w-screen-sm ">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex flex-col items-center justify-center mb-5">
            <IconBoy fill="#276852" width={96} height={96} />
          </div>
          <h1 className="font-bold text-primary text-2xl">
            Crie seu cadastro e a cadastrar seus bois.
          </h1>
        </div>
        <form className="flex flex-col" action="">
          <div className="flex flex-col gap-3">
            <Input
              name="nome"
              label="Nome"
              placeholder="Digite seu nome"
              icon={<Envelope weight="bold" className="text-primary h-6 w-6" />}
            />
            <Input
              name="email"
              label="Email"
              placeholder="Digite seu email"
              icon={<Envelope weight="bold" className="text-primary h-6 w-6" />}
            />
            <Input
              name="senha"
              label="Senha"
              placeholder="Digite sua senha"
              icon={<Lock weight="bold" className="text-primary h-6 w-6" />}
            />
          </div>

          <Button className="text-md mt-8">Criar Cadastro</Button>
        </form>
      </div>
    </div>
  );
};

export default CriarConta;
