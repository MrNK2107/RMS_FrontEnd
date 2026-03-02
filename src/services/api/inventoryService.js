import axiosInstance from '../axios/axiosInstance';

const inventoryService = {
  getAll: async () => {
    const response = await axiosInstance.get('/inventory');
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`/inventory/${id}`);
    return response.data;
  },

  create: async (itemData) => {
    const response = await axiosInstance.post('/inventory', itemData);
    return response.data;
  },

  update: async (id, itemData) => {
    const response = await axiosInstance.put(`/inventory/${id}`, itemData);
    return response.data;
  },

  delete: async (id) => {
    const response = await axiosInstance.delete(`/inventory/${id}`);
    return response.data;
  },

  getLowStock: async () => {
    const response = await axiosInstance.get('/inventory/low-stock');
    return response.data;
  },

  updateStock: async (id, quantity) => {
    const response = await axiosInstance.patch(`/inventory/${id}/stock`, { quantity });
    return response.data;
  },
};

export default inventoryService;
