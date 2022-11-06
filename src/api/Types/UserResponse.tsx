import { Ox } from "./Ox";

export type TUserResponse = {
    result: {
        name: string;
        brand: string;
        email: string;
        Ox: Ox[]
    }
}