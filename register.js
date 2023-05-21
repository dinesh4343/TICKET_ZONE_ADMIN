// Initialize Firebase

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwguSv0EE1qU9ziQMr9v7uV8R5aKLqCho",
  authDomain: "ticket-zone-d8bb3.firebaseapp.com",
  databaseURL: "https://ticket-zone-d8bb3-default-rtdb.firebaseio.com",
  projectId: "ticket-zone-d8bb3",
  storageBucket: "ticket-zone-d8bb3.appspot.com",
  messagingSenderId: "245941893820",
  appId: "1:245941893820:web:1a501509b48f6eb7cdeeb9",
  measurementId: "G-D0017YKGBQ"
};


firebase.initializeApp(firebaseConfig);

// Get elements
const signupForm = document.getElementById('signup-form');
const message = document.getElementById('message');

// Sign up event listener
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get user info
  const email = signupForm['email'].value;
  const password = signupForm['password'].value;

  // Sign up the user
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Clear form fields
      signupForm.reset();

      // Display success message
      message.textContent = 'Sign up successful!';
    })
    .catch((error) => {
      // Display error message
      message.textContent = error.message;
    });
});


