import axios from "axios";

const API_URL =
  process.env.MODE === "development"
    ? "http://localhost:8000/auth"
    : `${process.env.NEXT_PUBLIC_API_URL}/auth`;

export interface LoginData {
  readonly email: string;
  readonly password: string;
}

export interface LoginResponse {
  readonly access_token: string;
  readonly token_type: string;
}

export const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  const res = await axios.post(`${API_URL}/login`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};
