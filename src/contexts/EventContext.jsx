import React, { createContext, useContext, useState } from 'react';

const EventContext = createContext();

export const useEvent = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvent must be used within EventProvider');
  }
  return context;
};

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const addEvent = (event) => {
    setEvents(prev => [...prev, event]);
  };

  const updateEvent = (id, updatedEvent) => {
    setEvents(prev => prev.map(event => event.id === id ? { ...event, ...updatedEvent } : event));
  };

  const deleteEvent = (id) => {
    setEvents(prev => prev.filter(event => event.id !== id));
  };

  return (
    <EventContext.Provider value={{
      events,
      setEvents,
      selectedEvent,
      setSelectedEvent,
      addEvent,
      updateEvent,
      deleteEvent,
    }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventContext;
