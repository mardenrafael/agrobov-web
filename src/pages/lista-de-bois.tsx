import { format } from "date-fns";
import { Ox } from "../api/Types/Ox";
import DeleteOx from "../api/services/DeleteOx";
import { useOxList } from "../context/oxList";
import Screen from "../components/Screen";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function OxLIst() {
  const { oxList } = useOxList();
  const router = useRouter();

  function handleDelete(ox: Ox) {
    const deletedOx = DeleteOx(ox);
    toast("Operação realizada com sucesso!", { type: "success" });
    router.push("/dashboard");
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
    <Screen>
      <div>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg m-4">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-tertiary uppercase bg-primary ">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Brinco
                </th>
                <th scope="col" className="py-3 px-6">
                  Sexo
                </th>
                <th scope="col" className="py-3 px-6">
                  Data Nascimento
                </th>
                <th scope="col" className="py-3 px-6"></th>
              </tr>
            </thead>
            <tbody>
              {oxList.map((ox: Ox) => {
                return (
                  <tr
                    key={ox.id}
                    className="bg-white border-b text-primary hover:bg-gray-50"
                  >
                    <th className="py-4 px-6 font-medium ">{ox.earring}</th>
                    <td className="py-4 px-6">{formatGenre(ox.genre)}</td>
                    <td className="py-4 px-6">
                      {format(new Date(ox.born_date), "MM/dd/yyyy")}
                    </td>
                    <td className="">
                      <button
                        className="px-3 py-2 rounded text-md text-white bg-red-700 hover:bg-red-800"
                        onClick={() => handleDelete(ox)}
                      >
                        Deletar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Screen>
  );
}
