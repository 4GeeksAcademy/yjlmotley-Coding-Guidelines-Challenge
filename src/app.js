/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./index.html";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let who = ["A dog", "A stranger", "A cat", "The squirrel", "A crow"];
  let action = ["stole my", "grabbed my", "ripped my", "pooped on my"];
  let what = ["homework", "lunch money", "backpack", "hat"];
  let when = [
    "this morning!",
    "on the street!",
    "in the park!",
    "right outside the door!"
  ];

  function random(indx) {
    return Math.floor(Math.random() * indx.length);
  }

  return (
    who[random(who)] +
    " " +
    action[random(action)] +
    " " +
    what[random(what)] +
    " " +
    when[random(when)]
  );
};
