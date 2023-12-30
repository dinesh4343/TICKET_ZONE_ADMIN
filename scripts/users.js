const { initializeApp } = firebase;
const app = initializeApp(firebaseConfig);

// Reference to the Firebase Realtime Database
const realtimeDB = app.database();
async function displayUserData() {
    const usersRef = realtimeDB.ref('users');
    try {
        const snapshot = await usersRef.once('value');
        const users = snapshot.val();

        console.log('Users data:', users);

        if (!users) {
            console.warn("No user data found in the 'users' node");
            return;
        }

        const tableBody = document.querySelector('#data-table tbody');

        if (!tableBody) {
            console.error("#data-table tbody not found in the HTML");
            return;
        }

        let counter = 1;

        for (const userId in users) {
            const userData = users[userId];
            const row = document.createElement('tr');

            // Add user data to the table with fallbacks for undefined values
            row.innerHTML = `
                <td>${counter}</td>
                <td>${userData.name || ''}</td>
                <td>${userData.username || ''}</td>
                <td>${userData.email || ''}</td>
                <td>${userData.phoneNumber || ''}</td>
                <td>${userData.gender|| ''}</td>
            `;

            tableBody.appendChild(row);
            counter++;
        }
    } catch (error) {
        console.error("Error fetching data from Firebase:", error);
    }
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', displayUserData);
