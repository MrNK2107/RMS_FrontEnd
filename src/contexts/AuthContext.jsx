import React, { createContext, useState, useEffect, useCallback } from "react";
import authService from "../services/api/authService";
import { localStore } from "../store/localStore";
import { setupInterceptors } from "../services/axios/interceptors";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStore.remove("accessToken");
    localStore.remove("refreshToken");
    localStore.remove("user");
  }, []);

  useEffect(() => {
    const storedToken = localStore.get("accessToken");
    const storedUser = localStore.get("user");
    if (storedToken && storedUser) {
      setToken(storedToken);
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        logout();
      }
    }
    setLoading(false);
  }, [logout]);

  useEffect(() => {
    setupInterceptors({ logout });
  }, [logout]);

  const login = async (credentials) => {
    const response = await authService.login(credentials);
    const { accessToken, refreshToken, user: userData } = response.data;

    setToken(accessToken);
    setUser(userData);

    localStore.set("accessToken", accessToken);
    localStore.set("refreshToken", refreshToken);
    localStore.set("user", JSON.stringify(userData));

    return userData;
  };

  const hasRole = (role) => {
    return user?.roles?.includes(role) || false;
  };

  const value = {
    user,
    token,
    isAuthenticated: !!token,
    loading,
    login,
    logout,
    hasRole,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
