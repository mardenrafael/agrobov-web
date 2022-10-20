import { List } from "phosphor-react";
import IconBoy from "../IconBoy";

interface Props {
  titulo: string;
}

const Header: React.FC<Props> = ({ titulo }) => {
  return (
    <footer className="flex items-center justify-between h-10 bg-emerald-900 pr-4 ">
      <IconBoy />
      {/* <List /> */}
    </footer>
  );
};

export default Header;
