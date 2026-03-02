export const appConfig = {
  name: 'Resort Management System',
  version: '1.0.0',
  description: 'Comprehensive resort and hotel management solution',
  
  // Feature flags
  features: {
    enableNotifications: true,
    enableRealtimeUpdates: true,
    enableAnalytics: false,
    enableDarkMode: true,
    enableMultiLanguage: false,
  },

  // UI Configuration
  ui: {
    defaultTheme: 'light',
    sidebarCollapsed: false,
    itemsPerPage: 10,
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12h',
    currency: 'USD',
  },

  // Business rules
  business: {
    checkInTime: '14:00',
    checkOutTime: '11:00',
    minBookingDays: 1,
    maxBookingDays: 30,
    cancellationPolicy: '24 hours before check-in',
    maxGuestsPerRoom: 4,
  },

  // Contact information
  contact: {
    email: 'info@resortms.com',
    phone: '+1 (555) 123-4567',
    address: '123 Resort Avenue, Beach City, CA 90210',
  },

  // Social media
  social: {
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
  },
};

export default appConfig;
