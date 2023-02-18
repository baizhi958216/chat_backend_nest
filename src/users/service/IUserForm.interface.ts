export interface ICreateUser {
  name: string;
  psw: string;
  captcha: string;
  wait_number: string;
}

export interface IUserLogin {
  id: number;
  psw: string;
  captcha: string;
  wait_number: string;
}
