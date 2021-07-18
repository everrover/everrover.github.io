const firebase = require("firebase")

const firebaseConfig = {
  apiKey: "AIzaSyDAnuOv26thYiNMkdmkF0GH6_unHoEjGl8",
  authDomain: "zealot97-c70d5.firebaseapp.com",
  databaseURL: "https://zealot97-c70d5.firebaseio.com",
  projectId: "zealot97-c70d5",
  storageBucket: "zealot97-c70d5.appspot.com",
  messagingSenderId: "714267627264",
  appId: "1:714267627264:web:339dc5d911b94670f6ede5",
  measurementId: "G-7CNDKZWT9S"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}// firebase.analytics();
const db = firebase.firestore()
module.exports = {
  articles: db.collection("articles"),
  threads: db.collection("threads"),
}