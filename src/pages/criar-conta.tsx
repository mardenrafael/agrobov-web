import { useRouter } from "next/router";
import { Envelope, Lock, Person, User } from "phosphor-react";
import React, { FormEvent, useRef } from "react";
import Button from "../components/Button";
import IconBoy from "../components/IconBoy";
import Input from "../components/Input";
import { useAuth } from "../context/auth";

const CriarConta: React.FC = () => {
  const nomeRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const senhaRef = useRef<HTMLInputElement>();
  const { cadastrar } = useAuth();
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nomeRefval = nomeRef.current?.value;
    const emailRefval = emailRef.current?.value;
    const senhaRefval = senhaRef.current?.value;
    const isOk = await cadastrar(nomeRefval, emailRefval, senhaRefval);
    if (isOk) router.push("/dashboard");
  }

  return (
    <div className="flex flex-col items-center h-screen w-screen">
      <div className="flex flex-col justify-center h-full w-full p-4 max-w-screen-sm ">
        <div className="flex flex-col items-center justify-center mb-7">
          <div className="flex flex-col items-center justify-center mb-5">
            <IconBoy fill="#276852" width={96} height={96} />
          </div>
          <h1 className="font-bold text-primary text-2xl">
            Crie seu cadastro e a cadastrar seus bois.
          </h1>
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <Input
              ref={nomeRef as any}
              name="nome"
              label="Nome"
              placeholder="Digite seu nome"
              icon={<User weight="bold" className="text-primary h-6 w-6" />}
            />
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

          <Button className="text-md mt-9">Criar Cadastro</Button>
        </form>
      </div>
    </div>
  );
};

export default CriarConta;
