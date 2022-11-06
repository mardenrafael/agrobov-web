import { List } from "phosphor-react";
import { useAuth } from "../../context/auth";
import IconBoy from "../IconBoy";

interface Props {
  titulo: string;
}

const Header: React.FC<Props> = ({ titulo }) => {
  const { user } =  useAuth();
  console.log(user);

  return (
    <header className="flex items-center p-4 h-10 bg-primary">
      <IconBoy fill="#fff" />
      <h1 style={{padding: "1%"}} className="font-light text-s text-teal-50 " >Seja bem-vindo(a) {user?.name}</h1>
      {/* <List /> */}
    </header>
  );
};

export default Header;
