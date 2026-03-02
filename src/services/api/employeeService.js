import axiosInstance from '../axios/axiosInstance';

const employeeService = {
  getAll: async () => {
    const response = await axiosInstance.get('/employees');
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`/employees/${id}`);
    return response.data;
  },

  create: async (employeeData) => {
    const response = await axiosInstance.post('/employees', employeeData);
    return response.data;
  },

  update: async (id, employeeData) => {
    const response = await axiosInstance.put(`/employees/${id}`, employeeData);
    return response.data;
  },

  delete: async (id) => {
    const response = await axiosInstance.delete(`/employees/${id}`);
    return response.data;
  },

  getTasks: async (employeeId) => {
    const response = await axiosInstance.get(`/employees/${employeeId}/tasks`);
    return response.data;
  },

  assignTask: async (employeeId, taskData) => {
    const response = await axiosInstance.post(`/employees/${employeeId}/tasks`, taskData);
    return response.data;
  },

  getSchedule: async (employeeId) => {
    const response = await axiosInstance.get(`/employees/${employeeId}/schedule`);
    return response.data;
  },
};

export default employeeService;
