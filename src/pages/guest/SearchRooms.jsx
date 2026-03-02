import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Grid from '../../components/ui/Grid';
import Input from '../../components/common/Input';
import Select from '../../components/common/Select';
import Button from '../../components/ui/Button';
import RoomCard from '../../components/guest/RoomCard';

const SearchRooms = () => {
  const [filters, setFilters] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: '',
    priceRange: '',
  });

  const roomTypes = [
    { value: 'standard', label: 'Standard' },
    { value: 'deluxe', label: 'Deluxe' },
    { value: 'suite', label: 'Suite' },
  ];

  const priceRanges = [
    { value: '0-100', label: '$0 - $100' },
    { value: '100-200', label: '$100 - $200' },
    { value: '200+', label: '$200+' },
  ];

  const mockRooms = [
    {
      id: 1,
      number: '301',
      type: 'Deluxe Suite',
      price: 150,
      status: 'available',
      amenities: ['WiFi', 'TV', 'Mini Bar', 'Ocean View'],
    },
    {
      id: 2,
      number: '205',
      type: 'Standard Room',
      price: 80,
      status: 'available',
      amenities: ['WiFi', 'TV', 'Air Conditioning'],
    },
    {
      id: 3,
      number: '402',
      type: 'Presidential Suite',
      price: 350,
      status: 'available',
      amenities: ['WiFi', 'TV', 'Mini Bar', 'Jacuzzi', 'Balcony'],
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching with filters:', filters);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Search Rooms</h1>
        <p className="text-gray-600 mt-1">Find the perfect room for your stay</p>
      </div>

      <Card>
        <form onSubmit={handleSearch} className="space-y-4">
          <Grid cols={5} gap={4}>
            <Input
              type="date"
              label="Check-in"
              value={filters.checkIn}
              onChange={(e) => setFilters({ ...filters, checkIn: e.target.value })}
            />
            <Input
              type="date"
              label="Check-out"
              value={filters.checkOut}
              onChange={(e) => setFilters({ ...filters, checkOut: e.target.value })}
            />
            <Select
              label="Guests"
              value={filters.guests}
              onChange={(e) => setFilters({ ...filters, guests: e.target.value })}
              options={[
                { value: '1', label: '1 Guest' },
                { value: '2', label: '2 Guests' },
                { value: '3', label: '3 Guests' },
                { value: '4', label: '4+ Guests' },
              ]}
            />
            <Select
              label="Room Type"
              value={filters.roomType}
              onChange={(e) => setFilters({ ...filters, roomType: e.target.value })}
              options={roomTypes}
              placeholder="All Types"
            />
            <Select
              label="Price Range"
              value={filters.priceRange}
              onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              options={priceRanges}
              placeholder="All Prices"
            />
          </Grid>
          <Button type="submit" variant="primary" icon="search">
            Search Rooms
          </Button>
        </form>
      </Card>

      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Rooms</h2>
        <Grid cols={3} gap={6}>
          {mockRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onSelect={(room) => console.log('Selected:', room)}
              onViewDetails={(room) => console.log('View details:', room)}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default SearchRooms;
