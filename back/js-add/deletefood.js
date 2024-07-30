// let modal = document.querySelector("#exampleModal");
var deleteBtn = document.querySelector("#delete_modal_btn");
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
// import { getAnalytics, } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  remove
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjPDAQ7HpWFUEheU_Rmdn6mAjiw5mvNg4",
  authDomain: "tural-cafe-db.firebaseapp.com",
  databaseURL:
    "https://tural-cafe-db-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tural-cafe-db",
  storageBucket: "tural-cafe-db.appspot.com",
  messagingSenderId: "473916549227",
  appId: "1:473916549227:web:81c794567a51d49e66e92e",
  measurementId: "G-7S3LTF9XJE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);
// Yazmak için veri referansını alın
const dataRef = ref(database, "/menu");
console.log("test");
// Veri yazın

// Veri silin
deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const itemKey = prompt("Silmek istediğiniz öğenin anahtarını girin:");
  if (itemKey) {
    remove(ref(database, "/menu/" + itemKey))
      .then(() => {
        console.log("Data successfully deleted!");
        alert("Data successfully deleted!");
        location.reload();
      })
      .catch((error) => {
        console.error("Error deleting data: ", error);
        alert("Error deleting data: " + error);
        location.reload();
      });
  } else {
    alert("Silmek için geçerli bir anahtar girin.");
  }
});
