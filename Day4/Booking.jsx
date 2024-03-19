import React, { useState, useEffect } from 'react';
import "../../assets/css/Booking.css";
import { Link } from 'react-router-dom';

export default function Booking() {
  const [departurePorts] = useState(['Mumbai', 'Chennai']);
  const [itineraryDates] = useState({
    'Mumbai': ['Apr, 24', 'May, 24', 'Jun, 24', 'Sep, 24', 'Oct, 24', 'Nov, 24', 'Dec, 24', 'Jan, 25', 'Feb, 25', 'Mar, 25', 'Apr, 25', 'May, 25', 'Jun, 25'],
    'Chennai': ['Apr, 25', 'May, 25', 'Jun, 25']
  });
  const [selectedDeparturePort, setSelectedDeparturePort] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCabin, setSelectedCabin] = useState('');
  const [cabinOptions] = useState([
    'Interior Standard',
    'Interior Upper',
    'Interior Premier',
    'Ocean View Standard',
    'Ocean View Upper',
    'Ocean View Premier',
    'Mini Suite',
    'Suite',
    "Chairman's Suite"
  ]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  useEffect(() => {
    // Calculate total price whenever the number of guests or selected cabin changes
    let cabinPrice = 0;
    switch (selectedCabin) {
      case 'Interior Standard':
        cabinPrice = 10000;
        break;
      case 'Interior Upper':
        cabinPrice = 15000;
        break;
      case 'Interior Premier':
        cabinPrice = 20000;
        break;
      case 'Ocean View Standard':
        cabinPrice = 25000;
        break;
      case 'Ocean View Upper':
        cabinPrice = 30000;
        break;
      case 'Ocean View Premier':
        cabinPrice = 35000;
        break;
      case 'Mini Suite':
        cabinPrice = 40000;
        break;
      case 'Suite':
        cabinPrice = 45000;
        break;
      case "Chairman's Suite":
        cabinPrice = 50000;
        break;
      default:
        cabinPrice = 0;
    }
    const totalPrice = adults * cabinPrice + children * cabinPrice + infants * cabinPrice;
    setTotalPrice(totalPrice);
  }, [selectedCabin, adults, children, infants]);

  const handleDeparturePortChange = (port) => {
    if (itineraryDates[port]) {
      setSelectedDeparturePort(port);
    } else {
      console.error(`No itinerary dates found for ${port}`);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCabinSelect = (cabin) => {
    setSelectedCabin(cabin);
  };

  return (
    <div className="container">
      <h1>Book Your Cruise</h1>
      <div className="booking-form">
        <div className="form-group">
          <label>Departure Port:</label>
          <ul>
            {departurePorts.map(port => (
              <li key={port} onClick={() => handleDeparturePortChange(port)} className={selectedDeparturePort === port ? 'selected' : ''}>{port}</li>
            ))}
          </ul>
        </div>
        <div className="form-group">
          <label>Date:</label>
          <select onChange={(e) => handleDateChange(e.target.value)} value={selectedDate}>
            <option value="">Select a date</option>
            {itineraryDates[selectedDeparturePort]?.map(date => (
              <option key={date} value={date}>{date}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Cabin Options:</label>
          <select onChange={(e) => handleCabinSelect(e.target.value)} value={selectedCabin}>
            <option value="">Select a cabin</option>
            {cabinOptions.map(cabin => (
              <option key={cabin} value={cabin}>{cabin}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Guest Details:</label>
          <div className="guest-details">
            <div>
              <label>Adults (12 Years & Above):</label>
              <input type="number" value={adults} onChange={(e) => setAdults(parseInt(e.target.value))} />
            </div>
            <div>
              <label>Children (2 Years - 12 Years):</label>
              <input type="number" value={children} onChange={(e) => setChildren(parseInt(e.target.value))} />
            </div>
            <div>
              <label>Infants (6 Months - 2 Years):</label>
              <input type="number" value={infants} onChange={(e) => setInfants(parseInt(e.target.value))} />
            </div>
          </div>
        </div>
        {selectedCabin && (
          <div className="selected-cabin-details">
            <h2>Selected Cabin:</h2>
            <p>{selectedCabin}</p>
            <h2>Total Price:</h2>
            <p>₹ {totalPrice}</p>
            <button className="continue-button"><Link to='/'>Continue</Link></button>
          </div>
        )}
      </div>
    </div>
  );
}
