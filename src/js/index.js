/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let suiteArray = ["&#9824", "&#9827", "&#9829", "&#9830"];
  let numberArray = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  const randomCardNumberGenerator = iterator => {
    let cardObject = [];

    for (let i = 0; i < iterator; i++) {
      let suit = suiteArray[Math.floor(Math.random() * suiteArray.length)];
      let numb = numberArray[Math.floor(Math.random() * numberArray.length)];
      cardObject[i] = { suit: suit, num: numb };
    }
    return cardObject;
  };
  console.log(randomCardNumberGenerator(5));

  const sortCardGenerator = () => {
    pass;
  };

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

  cardGenerator(randomCardNumberGenerator(10));
};
