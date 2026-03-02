import React from 'react';
import Tag from '../../common/Tag';

const RoleBadge = ({ role }) => {
  const roleConfig = {
    ADMIN: { variant: 'danger', label: 'Admin' },
    EMPLOYEE: { variant: 'info', label: 'Employee' },
    GUEST: { variant: 'success', label: 'Guest' },
    MANAGER: { variant: 'warning', label: 'Manager' },
  };

  const config = roleConfig[role] || { variant: 'default', label: role };

  return (
    <Tag variant={config.variant} size="sm">
      {config.label}
    </Tag>
  );
};

export default RoleBadge;
