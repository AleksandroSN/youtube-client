export interface User {
  login: string;
  password: string;
}

export interface UserWithToken extends User {
  token: string;
}
