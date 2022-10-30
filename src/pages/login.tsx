import Link from "next/link";
import { Envelope, Lock } from "phosphor-react";
import React from "react";
import Button from "../components/Button";
import IconBoy from "../components/IconBoy";
import Input from "../components/Input";

// import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-screen w-screen">
      <div className="h-full w-full p-4 max-w-screen-sm ">
        <IconBoy fill="red" />
        <form className="flex flex-col gap-3" action="">
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
          <Link href={"/criar-conta"}>
            <a className="text-yellow-600 underline">
              Não tem uma conta? cadastre-se
            </a>
          </Link>
          <Button className="text-md ">Entrar na Plataforma</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
