import React from 'react';
import Card from '../../ui/Card';
import Icon from '../../common/Icon';

const RoomCard = ({ room, onSelect, onViewDetails }) => {
  const { id, number, type, price, status, image, amenities = [] } = room;

  const statusColors = {
    available: 'bg-green-100 text-green-800',
    occupied: 'bg-red-100 text-red-800',
    maintenance: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <Card hover className="overflow-hidden">
      <div className="aspect-video bg-gray-200 relative">
        {image ? (
          <img src={image} alt={`Room ${number}`} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Icon name="bed" size={48} className="text-gray-400" />
          </div>
        )}
        <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${statusColors[status] || statusColors.available}`}>
          {status || 'Available'}
        </span>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Room {number}</h3>
            <p className="text-sm text-gray-600">{type}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-600">${price}</p>
            <p className="text-xs text-gray-500">per night</p>
          </div>
        </div>

        {amenities.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3 mb-4">
            {amenities.slice(0, 3).map((amenity, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                {amenity}
              </span>
            ))}
            {amenities.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                +{amenities.length - 3} more
              </span>
            )}
          </div>
        )}

        <div className="flex gap-2 mt-4">
          <button
            onClick={() => onViewDetails?.(room)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            View Details
          </button>
          {status === 'available' && (
            <button
              onClick={() => onSelect?.(room)}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Book Now
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default RoomCard;
