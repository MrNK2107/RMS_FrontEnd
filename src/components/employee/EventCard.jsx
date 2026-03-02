import React from 'react';
import Card from '../../ui/Card';
import Badge from '../../common/Badge';
import Icon from '../../common/Icon';

const EventCard = ({ event, onViewDetails, onAccept }) => {
  const { id, name, location, date, time, status, attendees, type } = event;

  const typeColors = {
    conference: 'bg-blue-100 text-blue-800',
    wedding: 'bg-pink-100 text-pink-800',
    corporate: 'bg-purple-100 text-purple-800',
    party: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <Card hover>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${typeColors[type] || typeColors.corporate}`}>
            {type}
          </span>
        </div>
        {status && (
          <Badge variant={status === 'confirmed' ? 'success' : 'warning'}>
            {status}
          </Badge>
        )}
      </div>

      <div className="space-y-2 mt-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Icon name="calendar" size={16} />
          <span>{date} at {time}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Icon name="door" size={16} />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Icon name="users" size={16} />
          <span>{attendees} attendees</span>
        </div>
      </div>

      <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
        <button
          onClick={() => onViewDetails?.(event)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          View Details
        </button>
        {status === 'pending' && onAccept && (
          <button
            onClick={() => onAccept(event)}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Accept
          </button>
        )}
      </div>
    </Card>
  );
};

export default EventCard;
