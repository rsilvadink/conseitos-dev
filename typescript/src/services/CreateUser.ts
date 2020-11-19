
interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserDate {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>; // array variavel
  // se fosse do string techs: string[]
}

export default function createUser( {name = "", email, password} : CreateUserDate ) {
  const user = {
    name,
    email,
    password,
  };
  return user;
}
