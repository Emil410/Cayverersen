let menu = document.querySelector("#menu");
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
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
let foods = null;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dataRef = ref(database, "/menu");
get(dataRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log(data);
      foods = data;

      for (let foodId in data) {
        let food = data[foodId];
        console.log(food);
        let foodBox = document.createElement("div");
        foodBox.innerHTML = `
              <img
                src="${food.imageUrl}"
                alt=""
              />
              <h4 class="name_of_menyu">${food.name}</h4>
              <h4>Qiymet: ${food.price}</h4>
              <h4 class="about_menyu">
                ${food.about}
              </h4>
            `;
        foodBox.classList.add("box");
        menu.append(foodBox);
      }
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error("Error reading data: ", error);
  });
{
  /* <div class="box">
              <img
                src="https://img.freepik.com/free-photo/delicious-burger-with-many-ingredients-isolated-white-background-tasty-cheeseburger-splash-sauce_90220-1266.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712188800&semt=sph"
                alt=""
              />
              <h4 class="name_of_menyu">Burger big</h4>
              <h4 class="about_menyu">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h4>
              <h4>Qiymet: 4 man.</h4>
            </div> */
}
let categories = document.querySelectorAll(".category");
[...categories].map((category) => {
  category.addEventListener("click", (e) => {
    console.log(category);
    e.preventDefault();
    menu.innerHTML="";
    for (let foodId in foods) {
      let food = foods[foodId];
      console.log(food);
      if (food.category == e.target.getAttribute("data-value")) {
        let foodBox = document.createElement("div");
        foodBox.innerHTML = `
                <img
                  src="${food.imageUrl}"
                  alt=""
                />
                <h4 class="name_of_menyu">${food.name}</h4>
                <h4>Qiymet: ${food.price}</h4>
                <h4 class="about_menyu">
                  ${food.about}
                </h4>
              `;

        foodBox.classList.add("box");
        menu.append(foodBox);
      }
    }
  });
});


