import { Ox } from "../Types/Ox";

export default function getOxByGenre(genre: string, Ox: Ox) {
  return Ox.genre == genre;
}
