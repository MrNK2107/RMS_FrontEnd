import React from 'react';
import Card from '../../ui/Card';
import Avatar from '../../common/Avatar';
import Icon from '../../common/Icon';

const GuestProfileSummary = ({ user }) => {
  const { name, email, phone, memberSince, totalStays, points } = user || {};

  return (
    <Card>
      <div className="flex items-center gap-4 mb-6">
        <Avatar 
          src={user?.avatar} 
          initials={name?.substring(0, 2).toUpperCase()} 
          size="xl"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-200">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Icon name="calendar" size={20} className="text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{totalStays || 0}</p>
          <p className="text-sm text-gray-600">Total Stays</p>
        </div>
        <div className="text-center border-l border-r border-gray-200">
          <div className="flex items-center justify-center mb-2">
            <Icon name="chart" size={20} className="text-green-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{points || 0}</p>
          <p className="text-sm text-gray-600">Reward Points</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Icon name="users" size={20} className="text-purple-600" />
          </div>
          <p className="text-sm font-semibold text-gray-900">{memberSince || 'N/A'}</p>
          <p className="text-sm text-gray-600">Member Since</p>
        </div>
      </div>
    </Card>
  );
};

export default GuestProfileSummary;
