import Link from "next/link";
import Button from "../components/Button";
import Card from "../components/Card";
import Screen from "../components/Screen";
import grupos from "../mocks/dashboard";
const Dashboard = () => {
  return (
    <Screen>
      <div className="flex flex-col p-4 gap-8">
        <Link href="/cadastro/brinco">
          <a>
            <Button>Cadastre seu bovino</Button>
          </a>
        </Link>
        {grupos.map(({ titulo, machosQtd, femeasQtd }, index) => (
          <Card
            key={index}
            titulo={titulo}
            machosQtd={machosQtd}
            femeasQtd={femeasQtd}
          />
        ))}
      </div>
    </Screen>
  );
};

export default Dashboard;
