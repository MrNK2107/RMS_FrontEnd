export const routesConfig = {
  // Auth routes
  auth: {
    login: '/login',
    register: '/register',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password',
  },

  // Guest routes
  guest: {
    dashboard: '/guest/dashboard',
    searchRooms: '/guest/search',
    roomDetails: '/guest/rooms/:id',
    createReservation: '/guest/reservations/new',
    myReservations: '/guest/reservations',
    reservationDetails: '/guest/reservations/:id',
    myInvoices: '/guest/invoices',
    payment: '/guest/payment/:id',
    profile: '/guest/profile',
    support: '/guest/support',
  },

  // Employee routes
  employee: {
    dashboard: '/employee/dashboard',
    tasks: '/employee/tasks',
    schedule: '/employee/schedule',
    roomManagement: '/employee/rooms',
    housekeeping: '/employee/housekeeping',
    maintenance: '/employee/maintenance',
    inventory: '/employee/inventory',
    events: '/employee/events',
    eventDetails: '/employee/events/:id',
    support: '/employee/support',
  },

  // Admin routes
  admin: {
    dashboard: '/admin/dashboard',
    reservations: '/admin/reservations',
    rooms: '/admin/rooms',
    roomTypes: '/admin/room-types',
    billing: '/admin/billing',
    invoices: '/admin/invoices',
    payments: '/admin/payments',
    folios: '/admin/folios',
    hrPayroll: '/admin/hr-payroll',
    guests: '/admin/guests',
    employees: '/admin/employees',
    inventory: '/admin/inventory',
    roles: '/admin/roles',
    purchaseOrders: '/admin/purchase-orders',
    fnb: '/admin/fnb',
    menuItems: '/admin/menu-items',
    orders: '/admin/orders',
    promotions: '/admin/promotions',
    pricing: '/admin/pricing',
    reports: '/admin/reports',
    settings: '/admin/settings',
    support: '/admin/support',
  },

  // Shared routes
  shared: {
    notFound: '/404',
    serverError: '/500',
  },
};

export default routesConfig;
