import { Request, Response } from 'express';
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
  const user = createUser( {
    email: 'rsilva@handstecnologia',
    password: '123456',
    techs: ['Node.js', 'ReactJS','React Native', { title:'Java', experience: 100 } ],

  });
  console.log(user);
  return response.json({ message: 'Hello World' });
  
}
