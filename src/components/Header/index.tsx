import Link from "next/link";
import { List } from "phosphor-react";
import { useAuth } from "../../context/auth";
import IconBoy from "../IconBoy";

interface Props {
  titulo: string;
}

const Header: React.FC<Props> = ({ titulo }) => {
  const { user } = useAuth();

  return (
    <header className="flex w-full items-center justify-between p-1 px-6 bg-primary">
      <div className="flex  items-center gap-2">
        <IconBoy fill="#EFFFFF" />
        <h4 className="font-light text-sm  text-tertiary">
          Seja bem-vindo(a) {user?.name}
        </h4>
      </div>
      <div className="flex  items-center ">
        <Link href="nosso-contato">
          <a className="font-light text-sm text-tertiary underline hover:text-yellow">
            Entre em contato conosco
          </a>
        </Link>
      </div>

      <div className="flex  items-center ">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc-Lw1VedGCwGv-j5J08joLtjm4QbEkvVmJ_QUHBHj-mQj71Q/viewform?usp=sharing">
          <a className="font-light text-sm text-tertiary underline hover:text-yellow">
            Feedback do Usuário
          </a>
        </Link>
      </div>

    </header>
  );
};

export default Header;
