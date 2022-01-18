import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyAipsum3R08OJn439jL2FQ5mEgwBxyOgiY',
  authDomain: 'netflix-53bee.firebaseapp.com',
  projectId: 'netflix-53bee',
  storageBucket: 'netflix-53bee.appspot.com',
  messagingSenderId: '911806296322',
  appId: '1:911806296322:web:8131830d2591bc411e121b',
  measurementId: 'G-4FFDFCQS1L',
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
