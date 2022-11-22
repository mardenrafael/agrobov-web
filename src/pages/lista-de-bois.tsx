import { format } from "date-fns";
import { Ox } from "../api/Types/Ox";
import DeleteOx from "../api/services/DeleteOx";

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
        <table className="table-fixed border rounded-md  overflow-hidden my-0 mx-auto w-3/4">
          <thead className="bg-primary p-1 my-0 mx-auto">
            <tr className="text-center font-light text-l text-teal-50">
              <td>Brinco</td>
              <td>Sexo</td>
              <td>Data de Nascimento</td>
              <td></td>
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
                    <td className="py-1">
                      <button className="px-4 rounded text-md text-white bg-red-700 hover:bg-red-800" onClick={() => handleDelete(ox)}>Deletar</button>
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
