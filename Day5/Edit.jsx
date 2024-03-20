import React, { useState, useEffect } from 'react';
import AdminDashboard from './AdminDashboard'; // Import the AdminDashboard component
import "../../assets/css/Edit.css";


const CabinEditing = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('cabinData');
    return savedData ? JSON.parse(savedData) : [
      { date: 'Apr 24', cabins: [] },
      { date: 'May 24', cabins: [] },
      { date: 'Jun 24', cabins: [] }
    ];
  });
  useEffect(() => {
    localStorage.setItem('cabinData', JSON.stringify(data));
  }, [data]);

  // Function to add a new date
  const addDate = () => {
    const newDate = prompt("Enter new date (e.g., 'Jul 24'):");
    if (newDate) {
      setData([...data, { date: newDate, cabins: [] }]);
    }
  };

  // Function to delete a date
  const deleteDate = (date) => {
    const updatedData = data.filter(item => item.date !== date);
    setData(updatedData);
  };

  // Function to add a new cabin for a specific date, excluding certain cabin types
  const addCabin = (date) => {
    const cabinName = prompt("Enter new cabin name:");
    if (cabinName) {
      const excludedCabins = [
        'Interior Upper',
        'Interior Premier',
        'Ocean View Standard',
        'Ocean View Upper',
        'Ocean View Premier',
        'Mini Suite',
        'Suite'
      ];

      const updatedData = data.map(item => {
        if (item.date === date) {
          // Filter out excluded cabin types
          const filteredCabins = item.cabins.filter(cabin => !excludedCabins.includes(cabin));
          return { ...item, cabins: [...filteredCabins, cabinName] };
        }
        return item;
      });
      setData(updatedData);
    }
  };

  // Function to delete a cabin for a specific date
  const deleteCabin = (date, cabinName) => {
    const updatedData = data.map(item => {
      if (item.date === date) {
        const updatedCabins = item.cabins.filter(cabin => cabin !== cabinName);
        return { ...item, cabins: updatedCabins };
      }
      return item;
    });
    setData(updatedData);
  };

  return (
    <div>
      <AdminDashboard /> {/* Render the AdminDashboard component */}
      <div className="cabin-editing-container-custom">
        {/* Date and Cabin Editing content */}
        {data.map(({ date, cabins }) => (
          <div key={date} className="date-container">
            <h2 className="date-title">{date}</h2>
            {cabins.map(cabin => (
              <div key={cabin} className="cabin-custom">
                <h3 className="cabin-title">{cabin}</h3>
                <button  className="del_cabin" onClick={() => deleteCabin(date, cabin)}>Delete Cabin</button>
              </div>
            ))}
            {/* Add Cabin Form */}
            <form className="add-cabin-form" onSubmit={(e) => {
              e.preventDefault();
              addCabin(date);
            }}>
              
              <button type="submit">Add Cabin</button>
            </form>
            <button className='del_but' onClick={() => deleteDate(date)}>Delete Date</button>
          </div>
        ))}
        {/* Add Date Form */}
        <form className="add-date-form" onSubmit={(e) => {
          e.preventDefault();
          addDate();
        }}>
          <input type="text" placeholder="Enter new date (e.g., 'Jul 24')" />
          <button type="submit">Add Date</button>
        </form>
      </div>
    </div>
  );
};

export default CabinEditing;
