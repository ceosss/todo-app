import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyB4ES7ZE3r8kzuj_TvkJMi8SfVsAbruaJ0",
  authDomain: "todo-app-e0309.firebaseapp.com",
  databaseURL: "https://todo-app-e0309.firebaseio.com",
  projectId: "todo-app-e0309",
  storageBucket: "todo-app-e0309.appspot.com",
  messagingSenderId: "901894424147",
  appId: "1:901894424147:web:7a50e6759cb71f517468a6",
  measurementId: "G-L6E5P3Y1PD",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export const auth = firebase.auth();
export default firebase;
