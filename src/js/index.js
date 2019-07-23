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

  const cardGenerator = () => {
    pass;
  };
};
