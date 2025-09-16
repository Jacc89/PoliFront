export interface User {
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'user';  // o más roles si quieres
}
