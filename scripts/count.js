const firebaseConfig = {
    apiKey: "AIzaSyC3QS5kpqgxSZboFvNZXZbyQRfQmOy5pDs",
    authDomain: "dinesh-project-2c976.firebaseapp.com",
    databaseURL: "https://dinesh-project-2c976-default-rtdb.firebaseio.com",
    projectId: "dinesh-project-2c976",
    storageBucket: "dinesh-project-2c976.appspot.com",
    messagingSenderId: "94308291661",
    appId: "1:94308291661:web:a5bb00f16e6029ac087804"
  };
  firebase.initializeApp(firebaseConfig);
  const usersRef = firebase.database().ref('users');




// Function to update user count
function updateUserCount() {
    usersRef.once('value', snapshot => {
      const userCount = snapshot.numChildren();
      const userCountElement = document.getElementById('user-count');
      animateCounter(userCountElement, userCount);
    });
  }
  
  updateUserCount();
  


// Function to update male user count
function updateMaleUserCount() {
    usersRef.once('value', snapshot => {
      let maleCount = 0;

      snapshot.forEach(childSnapshot => {
        const gender = childSnapshot.child('gender').val();

        // Assuming 'gender' is a property in each user node
        if (gender === 'male') {
          maleCount++;
        }
      });

      const maleCountElement = document.getElementById('male-count');
      animateCounter(maleCountElement, maleCount);
    });
  }

  function animateCounter(element, targetCount) {
    let currentCount = 0;
    const duration = 5000; // in milliseconds
    const interval = 10;
    const steps = duration / interval;

    const step = (targetCount - currentCount) / steps;

    const counterInterval = setInterval(() => {
      currentCount += step;
      element.textContent = Math.round(currentCount);

      if (currentCount >= targetCount) {
        element.textContent = targetCount;
        clearInterval(counterInterval);
      }
    }, interval);
  }

  updateMaleUserCount();






// Function to update female user count
function updateFeMaleUserCount() {
  usersRef.once('value', snapshot => {
    let femaleCount = 0;

    snapshot.forEach(childSnapshot => {
      const gender = childSnapshot.child('gender').val();

      // Assuming 'gender' is a property in each user node
      if (gender === 'female') {
        femaleCount++;
      }
    });

    const femaleCountElement = document.getElementById('female-count');
    animateCounter(femaleCountElement, femaleCount);
  });
}

updateFeMaleUserCount();


function updateElementCount() {
    const initialValue = 5000;
    const targetElement = document.getElementById('count-element');
  

  
    animateCounter(targetElement, initialValue);
  }
  
  updateElementCount();
  




