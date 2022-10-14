import IconBoy from "../IconBoy";

interface Props {
  titulo: string;
}

const Header: React.FC<Props> = ({ titulo }) => {
  return (
    <footer className="flex items-center justify-end h-10 bg-emerald-900 pr-4 ">
      {/* <h1 className="text-2xl text-emerald-100 font-bold ">{titulo}</h1> */}

      <IconBoy />
    </footer>
  );
};

export default Header;
