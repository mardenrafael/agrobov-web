import Link from "next/link";
import Button from "../components/Button";
import Screen from "../components/Screen";
import User from "../components/User/User";

const Dashboard = () => {
  return (
    <Screen>
      <div className="flex flex-col p-4 gap-8">
        <div className="px-4">
          <Link href="/cadastro/brinco">
            <a>
              <Button className="mt-2 hover:shadow-4xl hover:ring-1 hover:ring-tercearia focus:border focus:border-yellou">
                Cadastre seu bovino
              </Button>
            </a>
          </Link>
        </div>
        <User />
      </div>
    </Screen>
  );
};

export default Dashboard;
