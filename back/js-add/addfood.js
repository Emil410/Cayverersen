// let modal = document.querySelector("#exampleModal");
let btn = document.querySelector("#save_modal_btn");
console.log(btn);
let inpName = document.querySelector("#exampleFormControlInput1");
let inpPrice = document.querySelector("#exampleFormControlInput2");
let inpImageUrl = document.querySelector("#exampleFormControlInput3");
let textAbout = document.querySelector("#exampleFormControlInput4");
let typeFood = document.querySelector("#exampleFormControlInput5");
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
// import { getAnalytics, } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
  push,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("sfasdf");
  var objKey = push(dataRef).key;
  if (inpName.value && inpImageUrl.value && inpPrice.value && textAbout.value) {
    set(ref(database, "/menu/" + objKey), {
      name: inpName.value,
      price: inpPrice.value,
      about: textAbout.value,
      imageUrl: inpImageUrl.value,
      category: typeFood.value,
    })
      .then(() => {
        console.log("Data successfully written!");
        alert("Data successfully written!");
        location.reload();
      })
      .catch((error) => {
        console.error("Error writing data: ", error);
        alert("Error writing data: ");
        location.reload();
      });
  }
});
