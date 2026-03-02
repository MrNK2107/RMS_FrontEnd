import axiosInstance from '../axios/axiosInstance';

const reservationService = {
  getAll: async () => {
    const response = await axiosInstance.get('/reservations');
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`/reservations/${id}`);
    return response.data;
  },

  create: async (reservationData) => {
    const response = await axiosInstance.post('/reservations', reservationData);
    return response.data;
  },

  update: async (id, reservationData) => {
    const response = await axiosInstance.put(`/reservations/${id}`, reservationData);
    return response.data;
  },

  delete: async (id) => {
    const response = await axiosInstance.delete(`/reservations/${id}`);
    return response.data;
  },

  getByUser: async (userId) => {
    const response = await axiosInstance.get(`/reservations/user/${userId}`);
    return response.data;
  },

  checkAvailability: async (roomId, checkIn, checkOut) => {
    const response = await axiosInstance.post('/reservations/check-availability', {
      roomId,
      checkIn,
      checkOut,
    });
    return response.data;
  },
};

export default reservationService;
