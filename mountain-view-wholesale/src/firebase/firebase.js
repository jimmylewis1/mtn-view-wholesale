import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC78xFc1UeFtkPTKAIOQEO3c6Bp1pcDduw",
  authDomain: "mountain-view-wholesale.firebaseapp.com",
  databaseURL: "https://mountain-view-wholesale.firebaseio.com",
  projectId: "mountain-view-wholesale",
  storageBucket: "mountain-view-wholesale.appspot.com",
  messagingSenderId: "381374430848"
};
firebase.initializeApp(config);
export default firebase;
