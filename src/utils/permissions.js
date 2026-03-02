import { ROLES } from './constants';

// Permission definitions
export const PERMISSIONS = {
  // Reservations
  VIEW_RESERVATIONS: 'view_reservations',
  CREATE_RESERVATION: 'create_reservation',
  UPDATE_RESERVATION: 'update_reservation',
  DELETE_RESERVATION: 'delete_reservation',

  // Rooms
  VIEW_ROOMS: 'view_rooms',
  MANAGE_ROOMS: 'manage_rooms',
  UPDATE_ROOM_STATUS: 'update_room_status',

  // Employees
  VIEW_EMPLOYEES: 'view_employees',
  MANAGE_EMPLOYEES: 'manage_employees',
  ASSIGN_TASKS: 'assign_tasks',

  // Inventory
  VIEW_INVENTORY: 'view_inventory',
  MANAGE_INVENTORY: 'manage_inventory',

  // Billing
  VIEW_BILLING: 'view_billing',
  MANAGE_BILLING: 'manage_billing',
  PROCESS_PAYMENTS: 'process_payments',

  // Reports
  VIEW_REPORTS: 'view_reports',
  GENERATE_REPORTS: 'generate_reports',

  // Settings
  VIEW_SETTINGS: 'view_settings',
  MANAGE_SETTINGS: 'manage_settings',
};

// Role-based permissions
export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: Object.values(PERMISSIONS), // All permissions

  [ROLES.MANAGER]: [
    PERMISSIONS.VIEW_RESERVATIONS,
    PERMISSIONS.CREATE_RESERVATION,
    PERMISSIONS.UPDATE_RESERVATION,
    PERMISSIONS.VIEW_ROOMS,
    PERMISSIONS.MANAGE_ROOMS,
    PERMISSIONS.UPDATE_ROOM_STATUS,
    PERMISSIONS.VIEW_EMPLOYEES,
    PERMISSIONS.ASSIGN_TASKS,
    PERMISSIONS.VIEW_INVENTORY,
    PERMISSIONS.VIEW_BILLING,
    PERMISSIONS.VIEW_REPORTS,
    PERMISSIONS.GENERATE_REPORTS,
  ],

  [ROLES.EMPLOYEE]: [
    PERMISSIONS.VIEW_RESERVATIONS,
    PERMISSIONS.VIEW_ROOMS,
    PERMISSIONS.UPDATE_ROOM_STATUS,
    PERMISSIONS.VIEW_INVENTORY,
  ],

  [ROLES.GUEST]: [
    PERMISSIONS.VIEW_RESERVATIONS,
    PERMISSIONS.CREATE_RESERVATION,
    PERMISSIONS.VIEW_ROOMS,
    PERMISSIONS.VIEW_BILLING,
  ],
};

// Check if user has permission
export const hasPermission = (userRole, permission) => {
  const rolePermissions = ROLE_PERMISSIONS[userRole] || [];
  return rolePermissions.includes(permission);
};

// Check if user has any of the permissions
export const hasAnyPermission = (userRole, permissions) => {
  return permissions.some(permission => hasPermission(userRole, permission));
};

// Check if user has all permissions
export const hasAllPermissions = (userRole, permissions) => {
  return permissions.every(permission => hasPermission(userRole, permission));
};

// Get all permissions for a role
export const getRolePermissions = (userRole) => {
  return ROLE_PERMISSIONS[userRole] || [];
};
