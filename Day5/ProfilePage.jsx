import React from 'react';
import '../../assets/css/ProfilePage.css';

export default function ProfilePage() {
  const profileData = {
    departurePorts: 'Mumbai',
    selectedDeparturePort: 'Mumbai',
    selectedDate: 'Apr, 24',
    selectedCabin: 'Interior Standard',
    cabinOptions: ['Interior Standard', 'Interior Upper', 'Interior Premier', 'Ocean View Standard', 'Ocean View Upper', 'Ocean View Premier', 'Mini Suite', 'Suite', "Chairman's Suite"],
    totalPrice: 10000,
    adults: 1,
    children: 0,
    infants: 0
  };

  return (
    <div className="profile-container">
      <h2 className="profile-heading">Profile Information</h2>
      <div className="profile-item">
        <span className="profile-label">Departure Port:</span>
        <span className="profile-value">{profileData.departurePorts}</span>
      </div>
      <div className="profile-item">
        <span className="profile-label">Selected Departure Port:</span>
        <span className="profile-value">{profileData.selectedDeparturePort}</span>
      </div>
      <div className="profile-item">
        <span className="profile-label">Selected Date:</span>
        <span className="profile-value">{profileData.selectedDate}</span>
      </div>
      <div className="profile-item">
        <span className="profile-label">Selected Cabin:</span>
        <span className="profile-value">{profileData.selectedCabin}</span>
      </div>
      <div className="profile-item">
        <span className="profile-label">Total Price:</span>
        <span className="profile-value">{profileData.totalPrice}</span>
      </div>
      <div className="profile-item">
        <span className="profile-label">Adults:</span>
        <span className="profile-value">{profileData.adults}</span>
      </div>
      <div className="profile-item">
        <span className="profile-label">Children:</span>
        <span className="profile-value">{profileData.children}</span>
      </div>
      <div className="profile-item">
        <span className="profile-label">Infants:</span>
        <span className="profile-value">{profileData.infants}</span>
      </div>
    </div>
  );
}
