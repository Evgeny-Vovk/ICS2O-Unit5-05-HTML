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
  const length1 = parseInt(document.getElementById('length1').value)
  const length2 = parseInt(document.getElementById('length2').value)
  const length3 = parseInt(document.getElementById('length3').value)

  // process
  if ((length1 <= 0) || (length2 <= 0) || (length3 <= 0)){
    document.getElementById("answer").innerHTML =
      "The length cannot be 0 or negative number."
  }
  else if ((length1 == length2) && (length2 == length3)) {
    document.getElementById("answer").innerHTML =
      "The triangle is an equilateral triangle because all of the lengths and angles are same and equal to each other."
  }
  else if ((length1 == length2) || (length2 == length3) || (length3 == length1)){
    document.getElementById("answer").innerHTML =
      "The triangle is an isosceles triangle because two of the lengths are equal to each other."
  }
  else if ((length1 != length2) && (length2 != length3) && (length3 != length1)){
    document.getElementById("answer").innerHTML =
      "The triangle is a scalene triangle because none of the lengths are equal to each other."
  }
  else {
    document.getElementById("answer").innerHTML =
      "Something went wrong."
  }
}