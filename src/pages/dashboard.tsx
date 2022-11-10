import Link from "next/link";
import Button from "../components/Button";
import Screen from "../components/Screen";
import User from "../components/User/User";

const Dashboard = () => {
  return (
    <Screen>
      <div className="flex flex-col p-4 gap-8">
        <Link href="/cadastro/brinco">
          <a>
            <Button>Cadastre seu bovino</Button>
          </a>
        </Link>
        <User />
      </div> 
    </Screen>
  );
};

export default Dashboard;
