import api from "../api/axios";

export const login = async (email: string, password: string) => {
  return api.post("/auth/login/", { email, password });
};

export const register = async (data: { email: string; password: string; [key: string]: any }) => {
  return api.post("/auth/register/", data);
};

export const refresh = async (refresh: string) => {
  return api.post("/auth/refresh/", { refresh });
};

export const getUser = async () => {
  return api.get("/usuarios/me/");
};

export const logout = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
};
