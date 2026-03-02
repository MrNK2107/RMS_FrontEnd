import axiosInstance from "./axiosInstance";
import authService from "../api/authService";
import { localStore } from "../../store/localStore";

export function setupInterceptors(authContext) {
  axiosInstance.interceptors.request.use((config) => {
    const token = localStore.get("accessToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  axiosInstance.interceptors.response.use(
    (r) => r,
    async (error) => {
      const original = error.config;
      if (error.response?.status === 401 && !original._retry) {
        original._retry = true;
        const refresh = localStore.get("refreshToken");
        if (refresh) {
          try {
            const resp = await authService.refresh({ refreshToken: refresh });
            localStore.set("accessToken", resp.data.accessToken);
            original.headers.Authorization = `Bearer ${resp.data.accessToken}`;
            return axiosInstance(original);
          } catch (e) {
            authContext?.logout();
            return Promise.reject(e);
          }
        } else {
          authContext?.logout();
        }
      }
      return Promise.reject(error);
    },
  );
}
