import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDEF18Tvxx3HBh1wdu9WTl2_JL974uI3Aw',
  authDomain: 'notein-2023.firebaseapp.com',
  databaseURL: 'https://notein-2023.firebaseio.com',
  projectId: 'notein-2023',
  storageBucket: 'notein-2023.appspot.com',
  messagingSenderId: '891742816921',
  appId: '1:891742816921:android:1abdcd987d0384af68c608',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
