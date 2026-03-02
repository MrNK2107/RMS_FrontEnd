import axiosInstance from "../axios/axiosInstance";

const authService = {
  login: async (credentials) => {
    // Mocking API call for frontend-only implementation
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          credentials.username === "admin" &&
          credentials.password === "admin"
        ) {
          resolve({
            data: {
              accessToken: "mock-admin-token",
              refreshToken: "mock-admin-refresh",
              user: { id: 1, name: "Admin User", roles: ["ADMIN"] },
            },
          });
        } else if (
          credentials.username === "employee" &&
          credentials.password === "employee"
        ) {
          resolve({
            data: {
              accessToken: "mock-employee-token",
              refreshToken: "mock-employee-refresh",
              user: { id: 2, name: "Employee User", roles: ["EMPLOYEE"] },
            },
          });
        } else if (
          credentials.username === "guest" &&
          credentials.password === "guest"
        ) {
          resolve({
            data: {
              accessToken: "mock-guest-token",
              refreshToken: "mock-guest-refresh",
              user: { id: 3, name: "Guest User", roles: ["GUEST"] },
            },
          });
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 500);
    });
  },
  refresh: async (data) => {
    return axiosInstance.post("/auth/refresh", data);
  },
};

export default authService;
