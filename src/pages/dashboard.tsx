import TOKEN from "../api/utils/Token";
import Card from "../components/Card";
import grupos from "../mocks/dashboard";
import User from "../api/User/GetUser";

const Dashboard = () => {
  return (
    <>
  <User token={TOKEN}/>
      {/* <div className="flex flex-col p-4 gap-8">
        {grupos.map(({ titulo, machosQtd, femeasQtd }, index) => (
          <Card
            key={index}
            titulo={titulo}
            machosQtd={machosQtd}
            femeasQtd={femeasQtd}
          />
        ))}
      </div> */}
    </>
  );
};

export default Dashboard;
