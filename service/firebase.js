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
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const db = firebase.firestore()
db.settings({
  ignoreUndefinedProperties: true,
})
// db.collection("tags").where("slug", "==", "naturee").get().then(res=>{res.forEach(doc=>console.log(doc.data()))})

module.exports = {
  articles: db.collection("articles"),
  threads: db.collection("threads"),
}

// db.collection("users").add({
//   first: "Ada",
//   last: "Lovelace",
//   born: 1815
// })
// .then((docRef) => {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//   console.error("Error adding document: ", error);
// });
