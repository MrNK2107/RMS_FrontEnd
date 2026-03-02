import React from 'react';
import Card from '../ui/Card';
import Tag from '../common/Tag';
import Icon from '../common/Icon';

const EventList = ({ events = [], onEventClick }) => {
  if (events.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No events found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <Card 
          key={event.id} 
          hover 
          onClick={() => onEventClick?.(event)}
          className="cursor-pointer"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{event.name}</h3>
              <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Icon name="calendar" size={14} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="door" size={14} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="users" size={14} />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
            </div>
            <Tag variant={event.status === 'confirmed' ? 'success' : 'warning'}>
              {event.status}
            </Tag>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default EventList;
