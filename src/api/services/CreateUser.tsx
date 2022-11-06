import BASE_URL from "../utils/BaseUrl";

interface IUser {
  name: string,
  email: string,
  password: string,
}

export default async function CreateUser(user: IUser) {
  const newUser = await fetch(`${BASE_URL}/user`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
    "Content-Type": "application/json"
    }
}).then((res) => {
    return res.json()
})

  return newUser;

}