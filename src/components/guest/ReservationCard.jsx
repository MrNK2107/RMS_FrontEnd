import React from 'react';
import Card from '../../ui/Card';
import Badge from '../../common/Badge';
import Tag from '../../common/Tag';
import Icon from '../../common/Icon';

const ReservationCard = ({ reservation, onViewDetails, onCancel }) => {
  const { id, roomNumber, checkIn, checkOut, status, totalAmount, guestCount } = reservation;

  const statusVariants = {
    confirmed: 'success',
    pending: 'warning',
    cancelled: 'danger',
    completed: 'default',
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <Card hover className="relative">
      <div className="absolute top-4 right-4">
        <Tag variant={statusVariants[status] || 'default'}>
          {status?.toUpperCase()}
        </Tag>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Room {roomNumber}</h3>
          <p className="text-sm text-gray-600">Reservation #{id}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">Check-in</p>
            <div className="flex items-center gap-2">
              <Icon name="calendar" size={16} className="text-gray-400" />
              <span className="font-medium">{formatDate(checkIn)}</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Check-out</p>
            <div className="flex items-center gap-2">
              <Icon name="calendar" size={16} className="text-gray-400" />
              <span className="font-medium">{formatDate(checkOut)}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <p className="text-sm text-gray-600">Total Amount</p>
            <p className="text-2xl font-bold text-gray-900">${totalAmount}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Guests</p>
            <p className="text-lg font-semibold">{guestCount}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onViewDetails?.(reservation)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            View Details
          </button>
          {status === 'confirmed' && (
            <button
              onClick={() => onCancel?.(reservation)}
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ReservationCard;
