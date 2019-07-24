/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

function myFunction() {
  cardGenerator(randomCardNumberGenerator(6));
  console.log("ciao");
}
var btn = document.getElementById("draw");
btn.onclick = myFunction;

let suiteArray = ["&#9824", "&#9827", "&#9829", "&#9830"];
let numberArray = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let numberArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const randomCardNumberGenerator = inputValue => {
  let cardObject = [];

  for (let i = 0; i < inputValue; i++) {
    let suit = suiteArray[Math.floor(Math.random() * suiteArray.length)];
    let numb = numberArray2[Math.floor(Math.random() * numberArray2.length)];
    cardObject[i] = { suit: suit, num: numb };
  }
  return cardObject;
};
console.log(randomCardNumberGenerator(10));
let newObjectArray = randomCardNumberGenerator(10);
console.log(newObjectArray);

const cardGenerator = anArrayOfObjects => {
  const newArrayOfObjects = anArrayOfObjects.map(item => {
    let cardContainer = document.createElement("div");
    let cardHeader = document.createElement("div");
    let cardBody = document.createElement("div");
    let cardFooter = document.createElement("div");
    cardContainer.className =
      "custom-card justify-content-center border rounded px-2 mt-5 col mr-2";
    cardHeader.className = "col-12 text-left";
    cardHeader.innerHTML = item.suit;
    cardBody.innerHTML = item.num;
    cardFooter.innerHTML = item.suit;
    document.querySelector("#main-container").appendChild(cardContainer);
    cardContainer.appendChild(cardHeader);
    cardContainer.appendChild(cardBody);
    cardContainer.appendChild(cardFooter);
  });
  return newArrayOfObjects;
};

// cardGenerator(randomCardNumberGenerator(6));

const bubbleSort = (arrayOfObjectsToSort, par) => {
  var swapped;
  let a = arrayOfObjectsToSort;
  do {
    swapped = false;
    for (var i = 0; i < a.length - 1; i++) {
      if (a[i][par] > a[i + 1][par]) {
        var temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};
bubbleSort(newObjectArray, "num");

// var arrayOfPeople = [
//   { name: "Rick", age: 23, place: 2 },
//   { name: "Alan", age: 25, place: 1 },
//   { name: "Joe", age: 20, place: 4 },
//   { name: "Dave", age: 35, place: 3 }
// ];
// console.log(arrayOfPeople);

// for (let i = 0; i < arrayOfPeople.length; i++) {
//   console.log(arrayOfPeople[i]);
// }

// const sortCardGenerator = () => {
//   pass;
// };

// const bubbleSort = (arr, item) => {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i][item] > arr[i + 1][item]) {
//         let tmp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = tmp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return arr;
// };
// console.log(bubbleSort(randomCardNumberGenerator(5), "num"));
