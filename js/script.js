// Created by: Evgeny
// Created on: may 2022
// This file contains the JS functions for index.html

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-05-HTML/sw.js", {
    scope: "/ICS2O-Unit5-05-HTML/",
  })
}

/**
 * This function calculates which movie rate you can watch.
 */
function calculate() {

  //input
  const firstLength = parseInt(document.getElementById('first-length').value)
  const secondLength = parseInt(document.getElementById('second-length').value)
  const thirdLength = parseInt(document.getElementById('third-length').value)

  // process
  if ((firstLength <= 0) || (secondLength <= 0) || (thirdLength <= 0)){
    document.getElementById("answer").innerHTML =
      "The length cannot be 0 or negative number."
  }
  else if ((firstLength == secondLength) && (secondLength == thirdLength)) {
    document.getElementById("answer").innerHTML =
      "The triangle is an equilateral triangle because all of the lengths and angles are same and equal to each other."
  }
  else if ((firstLength == secondLength) || (secondLength == thirdLength) || (thirdLength == firstLength)){
    document.getElementById("answer").innerHTML =
      "The triangle is an isosceles triangle because two of the lengths are equal to each other."
  }
  else if ((firstLength != secondLength) && (secondLength != thirdLength) && (thirdLength != firstLength)){
    document.getElementById("answer").innerHTML =
      "The triangle is a scalene triangle because none of the lengths are equal to each other."
  }
  else {
    document.getElementById("answer").innerHTML =
      "Something went wrong."
  }
}