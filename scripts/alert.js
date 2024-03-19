    // Your Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyC3QS5kpqgxSZboFvNZXZbyQRfQmOy5pDs",
        authDomain: "dinesh-project-2c976.firebaseapp.com",
        databaseURL: "https://dinesh-project-2c976-default-rtdb.firebaseio.com",
        projectId: "dinesh-project-2c976",
        storageBucket: "dinesh-project-2c976.appspot.com",
        messagingSenderId: "94308291661",
        appId: "1:94308291661:web:a5bb00f16e6029ac087804"
      };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    
        // Reference to the Firebase database
        const database = firebase.database();
    
        // Function to monitor new SOS alerts
        document.addEventListener('DOMContentLoaded', function () {
            // Define the monitorSOSAlerts function
            function monitorSOSAlerts() {
              const alertTable = document.getElementById('alertTable');
        
              database.ref('alerts').on('child_added', snapshot => {
                const alertData = snapshot.val();
                // Create a new table row
                const tableRow = document.createElement('tr');
                // Create table cells for each alert property
                const messageCell = document.createElement('td');
                messageCell.textContent = alertData.message;
                const timestampCell = document.createElement('td');
                // Format the timestamp
                const timestamp = new Date(alertData.timestamp);
                const formattedTimestamp = timestamp.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  weekday: 'short',
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true
                });
                timestampCell.textContent = formattedTimestamp;
                // Append table cells to the table row
                tableRow.appendChild(messageCell);
                tableRow.appendChild(timestampCell);
        
                // Check if location data exists
                if (alertData.location && alertData.location.latitude && alertData.location.longitude) {
                  // Create a cell for the map link
                  const mapCell = document.createElement('td');
                  // Create a link to view the location on Google Maps
                  const mapLink = document.createElement('a');
                  mapLink.textContent = 'View Location';
                  mapLink.href = `https://www.google.com/maps/search/?api=1&query=${alertData.location.latitude},${alertData.location.longitude}`;
                  mapLink.target = '_blank'; // Open link in a new tab
                  // Append the link to the cell
                  mapCell.appendChild(mapLink);
                  // Append the map cell to the table row
                  tableRow.appendChild(mapCell);
                } else {
                  // If no location data exists, create an empty cell for consistency
                  const emptyCell = document.createElement('td');
                  tableRow.appendChild(emptyCell);
                }
        
                // Append the table row to the table
                alertTable.appendChild(tableRow);
              });
            }
        
            // Call the monitorSOSAlerts function to start monitoring SOS alerts
            monitorSOSAlerts();
          });