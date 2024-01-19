// Sample data for booked rooms (replace this with your actual data)
const bookedRoomsData = [
    { roomNumber: 101, checkInDate: '2024-01-20', expectedCheckOut: '2024-01-25' },
    { roomNumber: 102, checkInDate: '2024-01-22', expectedCheckOut: '2024-01-27' },
    // Add more room data as needed
  ];
  
  // Function to display booked rooms
  function displayBookedRooms() {
    const bookedRoomsContainer = document.getElementById('booked-rooms-container');
    bookedRoomsContainer.innerHTML = ''; // Clear existing content
  
    bookedRoomsData.forEach(room => {
      const roomCard = document.createElement('div');
      roomCard.classList.add('room-card');
      roomCard.innerHTML = `<p>Room ${room.roomNumber}</p>
                           <p>Check-in Date: ${room.checkInDate}</p>
                           <p>Expected Check-out: ${room.expectedCheckOut}</p>`;
      bookedRoomsContainer.appendChild(roomCard);
    });
  }
  
  // Function to filter booked rooms by expected check-out
  function filterByCheckOut() {
    const checkoutFilter = document.getElementById('checkout-filter');
    const filteredRooms = checkoutFilter.checked ?
      bookedRoomsData.filter(room => /* Add your filter logic based on expected check-out */) :
      bookedRoomsData;
  
    // Update the displayed rooms
    updateDisplayedRooms(filteredRooms);
  }
  
  // Function to sort booked rooms
  function sortBookedRooms() {
    const sortBySelect = document.getElementById('sort-by');
    const sortBy = sortBySelect.value;
  
    const sortedRooms = bookedRoomsData.slice().sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    });
  
    // Update the displayed rooms
    updateDisplayedRooms(sortedRooms);
  }
  
  // Function to update the displayed rooms
  function updateDisplayedRooms(rooms) {
    const bookedRoomsContainer = document.getElementById('booked-rooms-container');
    bookedRoomsContainer.innerHTML = ''; // Clear existing content
  
    rooms.forEach(room => {
      const roomCard = document.createElement('div');
      roomCard.classList.add('room-card');
      roomCard.innerHTML = `<p>Room ${room.roomNumber}</p>
                           <p>Check-in Date: ${room.checkInDate}</p>
                           <p>Expected Check-out: ${room.expectedCheckOut}</p>`;
      bookedRoomsContainer.appendChild(roomCard);
    });
  }
  
  // Initial display of booked rooms
  displayBookedRooms();
  