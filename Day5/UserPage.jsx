import React from 'react';
import '../../assets/css/UserPage.css';
import AdminDashboard from '../auth/AdminDashboard';

const UserPage = () => {
  const bookings = [
    { name: 'Asmitha', cruiseBooked: 'Apr 20, 2024 to Apr 27, 2024', cabinBooked: 'Suite', passengers: 2, totalPrice: 'Rs.233,910' },
    { name: 'Inba', cruiseBooked: 'May 1, 2024 to May 7, 2024', cabinBooked: 'Balcony Stateroom', passengers: 3, totalPrice: 'Rs.179,325' },
    { name: 'Nila', cruiseBooked: 'May 1, 2024 to May 7, 2024', cabinBooked: 'Luxury Suite', passengers: 1, totalPrice: 'Rs.151,400' },
    { name: 'Sam', cruiseBooked: 'Apr 10, 2024 to Apr 18, 2024', cabinBooked: 'Interior StateRoom', passengers: 4, totalPrice: 'Rs.161,432' }
  ];

  return (
    <div className="user-page">
      <div className="content-container">
        <div className="admin-dashboard">
          <AdminDashboard />
        </div>
        
        <div className="booking-information">
          <h2>User Booking Informations</h2>
          <table>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>Cruise Booked</th>
                <th>Cabin Booked</th>
                <th>No. of Passengers</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{booking.name}</td>
                  <td>{booking.cruiseBooked}</td>
                  <td>{booking.cabinBooked}</td>
                  <td>{booking.passengers}</td>
                  <td>{booking.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserPage;