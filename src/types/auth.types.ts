export interface AuthState {
    user: User | null,
    token: string | null,
    isAuthenticated: boolean,
    isLoading: boolean,
    error: null | string,
}

export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  role: string;
}

export interface RegisterResponse {
  message: string;
}

export interface LogoutRequest {}

export interface LogoutResponse {
  message: string;
}

export interface UpdateUserRequest {
  id: number;
  username: string;
  email: string;
  role: string;
}

export interface UpdateUserResponse {
  message: string;
}

export interface DeleteUserRequest {
  id: number;
}

export interface DeleteUserResponse {
  message: string;
}
