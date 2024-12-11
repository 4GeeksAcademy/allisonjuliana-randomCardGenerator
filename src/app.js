/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let icon = ["♠", "♣", "♦", "♥"];
  let randomIcon = Math.floor(Math.random() * icon.length);

  let card = ["2", "3", "4", "5", "6", "7", "8", "9", "A", "10", "J", "Q", "K"];
  let randomCard = Math.floor(Math.random() * card.length);

  document.getElementById("cardContent").innerHTML = card[randomCard];

  if (icon[randomIcon] === icon[2]) {
    document.getElementById("before").innerHTML = icon[randomIcon];
    document.getElementById("before").style.color = "red";
  } else if (icon[randomIcon] === icon[3]) {
    document.getElementById("before").innerHTML = icon[randomIcon];
    document.getElementById("before").style.color = "red";
  } else {
    document.getElementById("before").innerHTML = icon[randomIcon];
  }

  if (icon[randomIcon] === icon[2]) {
    document.getElementById("after").innerHTML = icon[randomIcon];
    document.getElementById("after").style.color = "red";
  } else if (icon[randomIcon] === icon[3]) {
    document.getElementById("after").innerHTML = icon[randomIcon];
    document.getElementById("after").style.color = "red";
  } else {
    document.getElementById("after").innerHTML = icon[randomIcon];
  }
};
