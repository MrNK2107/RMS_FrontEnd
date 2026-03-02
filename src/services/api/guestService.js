import axiosInstance from '../axios/axiosInstance';

const guestService = {
  getAll: async () => {
    const response = await axiosInstance.get('/guests');
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`/guests/${id}`);
    return response.data;
  },

  create: async (guestData) => {
    const response = await axiosInstance.post('/guests', guestData);
    return response.data;
  },

  update: async (id, guestData) => {
    const response = await axiosInstance.put(`/guests/${id}`, guestData);
    return response.data;
  },

  delete: async (id) => {
    const response = await axiosInstance.delete(`/guests/${id}`);
    return response.data;
  },

  getReservations: async (guestId) => {
    const response = await axiosInstance.get(`/guests/${guestId}/reservations`);
    return response.data;
  },

  getInvoices: async (guestId) => {
    const response = await axiosInstance.get(`/guests/${guestId}/invoices`);
    return response.data;
  },
};

export default guestService;
