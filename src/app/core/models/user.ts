export interface User {
  username: string;
  email: string;
  password: string;
  // passwordos: string;
  role: 'admin' | 'user';  // o más roles si quieres
}
