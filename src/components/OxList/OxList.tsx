import { format } from "date-fns";
import { Ox } from "../../api/Types/Ox";
import DeleteOx from "../../api/services/DeleteOx";
import getUser from "../../api/services/GetUser";

interface props {
  OxList: Ox[];
}

export default function OxLIst({ OxList }: props) {
  const oxList = OxList;

  function handleDelete(ox: Ox) {
    const deletedOx = DeleteOx(ox);
  }

  function formatGenre(genre: string) {
    if (genre === "Male") {
      const formatedGenre = "Macho";
      return formatedGenre;
    }
    const formatedGenre = "Fêmea";
    return formatedGenre;
  }

  return (
    <>
      <div>
        <table
          className="table-fixed border rounded-md  overflow-hidden"
          style={{
            width: "70%",
            margin: "0 auto",
          }}
        >
          <thead
            className="bg-primary p-1"
            style={{
              margin: "0 auto",
            }}
          >
            <tr className="text-center font-light text-l text-teal-50">
              <td>Brinco</td>
              <td>Sexo</td>
              <td>Data de Nascimento</td>
            </tr>
          </thead>
          <tbody>
            {oxList.map((ox: Ox) => {
              return (
                <>
                  <tr className="text-center py-4">
                    <td>{ox.earring}</td>
                    <td>{formatGenre(ox.genre)}</td>
                    <td>{format(new Date(ox.born_date), "MM/dd/yyyy")}</td>
                    <td>
                      <button onClick={() => handleDelete(ox)}>Deletar</button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
