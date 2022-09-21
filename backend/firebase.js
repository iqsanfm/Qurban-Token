// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// const { getAnalytics } = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ_8hcFGR4r0X9CuF7DZxublP5HAKM5XI",
  authDomain: "dbstore-fc268.firebaseapp.com",
  projectId: "dbstore-fc268",
  storageBucket: "dbstore-fc268.appspot.com",
  messagingSenderId: "833385669562",
  appId: "1:833385669562:web:89ec55f0f8377cf9057383",
  measurementId: "G-B55723KH4S"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseapp);