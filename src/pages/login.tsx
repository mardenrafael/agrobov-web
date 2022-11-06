import Link from "next/link";
import { Envelope, Lock } from "phosphor-react";
import React, { FormEvent, useRef } from "react";
import Button from "../components/Button";
import IconBoy from "../components/IconBoy";
import Input from "../components/Input";

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>();
  const senhaRef = useRef<HTMLInputElement>();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const senhaRefval = emailRef.current?.value;
    const emailRefval = senhaRef.current?.value;
  }

  return (
    <div className="flex flex-col items-center h-screen w-screen">
      <div className="flex flex-col justify-center h-full w-full p-4 max-w-screen-sm ">
        <div className="flex flex-col items-center justify-center mb-5">
          <IconBoy fill="#276852" width={96} height={96} />
        </div>
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="font-bold text-primary text-2xl">Login</h1>
          <h3 className="font-medium text-primary text-md">
            Digite o seu email e senha
          </h3>
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <Input
              ref={emailRef as any}
              name="email"
              label="Email"
              placeholder="Digite seu email"
              icon={<Envelope weight="bold" className="text-primary h-6 w-6" />}
            />
            <Input
              ref={senhaRef as any}
              name="senha"
              label="Senha"
              placeholder="Digite sua senha"
              icon={<Lock weight="bold" className="text-primary h-6 w-6" />}
            />
          </div>

          <Link href={"/criar-conta"}>
            <a className="text-yellow-600 underline text-center mt-5 mb-9">
              Não tem uma conta? cadastre-se
            </a>
          </Link>
          <Button className="text-md">Entrar na Plataforma</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
