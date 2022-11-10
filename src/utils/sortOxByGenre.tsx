import { Ox } from "../api/Types/Ox";

export default function getOxByGenre(genre: string, Ox: Ox) {
  return Ox.genre == genre;
}
