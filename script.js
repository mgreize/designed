"use strict";

var anchors = document.getElementsByClassName("c");
var burger = document.getElementById("burger");

burger.addEventListener("click", function () {
  for (var x of anchors) {
    x.classList.toggle("block");
  }
  this.classList.toggle("rotateZ");
});
