// Fetch data from Realtime Database
realtimeDB.ref("data").once("value", (snapshot) => {
  const data = snapshot.val();
  const tableBody = document.querySelector("#data-table tbody");
  // Iterate over data and create table rows
  let count = 1;
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const row = document.createElement("tr");
      const values = data[key];

      const propertiesOrder = ["name", "gender", "age", "mobileNo", "address"];
      // Add column number cell
      const colNumCell = document.createElement("td");
      colNumCell.textContent = count;
      row.appendChild(colNumCell);
      // Add table data cells
      for (const prop of propertiesOrder) {
        const cell = document.createElement("td");
        cell.textContent = values[prop];
        row.appendChild(cell);
      }

      tableBody.appendChild(row); // Append row to table body
      count++; // Increment column number count
    }
  }
});
