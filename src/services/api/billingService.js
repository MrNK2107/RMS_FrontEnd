import axiosInstance from '../axios/axiosInstance';

const billingService = {
  getAllInvoices: async () => {
    const response = await axiosInstance.get('/invoices');
    return response.data;
  },

  getInvoiceById: async (id) => {
    const response = await axiosInstance.get(`/invoices/${id}`);
    return response.data;
  },

  createInvoice: async (invoiceData) => {
    const response = await axiosInstance.post('/invoices', invoiceData);
    return response.data;
  },

  updateInvoice: async (id, invoiceData) => {
    const response = await axiosInstance.put(`/invoices/${id}`, invoiceData);
    return response.data;
  },

  deleteInvoice: async (id) => {
    const response = await axiosInstance.delete(`/invoices/${id}`);
    return response.data;
  },

  getInvoicesByGuest: async (guestId) => {
    const response = await axiosInstance.get(`/invoices/guest/${guestId}`);
    return response.data;
  },

  generateInvoice: async (reservationId) => {
    const response = await axiosInstance.post(`/invoices/generate/${reservationId}`);
    return response.data;
  },
};

export default billingService;
