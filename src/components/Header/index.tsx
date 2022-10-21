import { List } from "phosphor-react";
import IconBoy from "../IconBoy";

interface Props {
  titulo: string;
}

const Header: React.FC<Props> = ({ titulo }) => {
  return (
    <footer className="flex items-center justify-between px-4 py-2 h-10 bg-primary">
      <IconBoy />

      {/* <List /> */}
    </footer>
  );
};

export default Header;
