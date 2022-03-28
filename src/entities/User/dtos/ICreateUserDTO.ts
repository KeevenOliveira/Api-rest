export interface ICreateUser {
  body: {
    name: string;
    email: string;
    password: string;
  };
}
