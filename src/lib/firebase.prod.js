import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDm_MuZ8rWnSqE8yMhU7lLrs8UqY4CcJA4",
  authDomain: "netflix-clone-9ca4a.firebaseapp.com",
  databaseURL: "https://netflix-clone-9ca4a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflix-clone-9ca4a",
  storageBucket: "netflix-clone-9ca4a.appspot.com",
  messagingSenderId: "25071444813",
  appId: "1:25071444813:web:f20fcce296738352b38d04",
  measurementId: "G-1F4S4JZ0S3"

};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
