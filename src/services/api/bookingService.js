import axiosInstance from '../axios/axiosInstance';

const bookingService = {
  getAllRooms: async (filters = {}) => {
    const response = await axiosInstance.get('/rooms', { params: filters });
    return response.data;
  },

  getRoomById: async (id) => {
    const response = await axiosInstance.get(`/rooms/${id}`);
    return response.data;
  },

  getRoomTypes: async () => {
    const response = await axiosInstance.get('/rooms/types');
    return response.data;
  },

  searchRooms: async (searchParams) => {
    const response = await axiosInstance.post('/rooms/search', searchParams);
    return response.data;
  },

  bookRoom: async (bookingData) => {
    const response = await axiosInstance.post('/bookings', bookingData);
    return response.data;
  },

  getAvailableRooms: async (checkIn, checkOut) => {
    const response = await axiosInstance.get('/rooms/available', {
      params: { checkIn, checkOut },
    });
    return response.data;
  },
};

export default bookingService;
