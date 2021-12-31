"use strict";

const arrow = document.querySelectorAll(".icon")[1];
const items = document.querySelectorAll(".item")[1];

arrow.addEventListener("click", onClick);

function onClick(e) {
  items.classList.toggle("open");
}
