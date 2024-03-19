const firebaseConfig = {
    apiKey: "AIzaSyBB2czjpbpALPGx3GhR5LfoKS4iBHpptGQ",
    authDomain: "tickets-12578.firebaseapp.com",
    databaseURL: "https://tickets-12578-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tickets-12578",
    storageBucket: "tickets-12578.appspot.com",
    messagingSenderId: "826244609515",
    appId: "1:826244609515:web:8565ad3e89913876b555ae"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference to the 'scannedQRCodes' collection
  const scannedQRCodesRef = firebase.database().ref('scannedQRCodes');

  // Event listener for changes in the data
  scannedQRCodesRef.on('value', (snapshot) => {
    const qrData = snapshot.val();

    // Check if data exists
    if (qrData) {
      // Get the tbody element to append rows
      const tbody = document.querySelector('#qrDataTable tbody');

      // Clear existing rows
      tbody.innerHTML = "";

      // Loop through the QR data and populate the table
      Object.entries(qrData).forEach(([key, value]) => {
        const timestamp = value.timestamp;
        const qrText = value.qrText;

        // Extracting details from QR text
        const details = qrText.split('\n');

        // Check if details array has expected length
        if (details.length >= 6) {
          // Create a new row
          const row = document.createElement('tr');

          // Create cells for timestamp, name, mobile number, from, to, tickets, bus number
          const timestampCell = document.createElement('td');
          timestampCell.textContent = timestamp;

          const nameCell = document.createElement('td');
          nameCell.textContent = details[0].split(':')[1].trim(); // Name

          const mobileCell = document.createElement('td');
          mobileCell.textContent = details[1].split(':')[1].trim(); // Mobile

          const fromCell = document.createElement('td');
          fromCell.textContent = details[2].split(':')[1].trim(); // From

          const toCell = document.createElement('td');
          toCell.textContent = details[4].split(':')[1].trim(); // To

          const ticketsCell = document.createElement('td');
          ticketsCell.textContent = details[5].split(':')[1].trim(); // Tickets

          const busnoCell = document.createElement('td');
          busnoCell.textContent = details[3].split(':')[1].trim(); // Bus Number

          // Append cells to the row
          row.appendChild(timestampCell);
          row.appendChild(nameCell);
          row.appendChild(mobileCell);
          row.appendChild(fromCell);
          row.appendChild(toCell);
          row.appendChild(ticketsCell);
          row.appendChild(busnoCell);

          // Append the row to the tbody
          tbody.appendChild(row);
        } else {
          console.error('Invalid QR text format:', qrText);
        }
      });
    } else {
      // Handle the case when no data is available
      document.getElementById('qrDataTable').innerHTML = "<p>No QR code data available.</p>";
    }
  });