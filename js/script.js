// Created by: Evgeny
// Created on: may 2022
// This file contains the JS functions for index.html

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-03-HTML/sw.js", {
    scope: "/ICS2O-Unit5-03-HTML/",
  })
}

/**
 * This function calculates which movie rate you can watch.
 */
function calculate() {

  //input
  const age = parseInt(document.getElementById('age').value)

  // process
  if (age >= 17) {
    document.getElementById("answer").innerHTML =
      "You you are " + age + " years old, so you can see R rated movies."
  }
  else if (age >= 13){
    document.getElementById("answer").innerHTML =
      "You are " + age + " years old, so you can see PG-13 rated movies."
  }
  else {
    document.getElementById("answer").innerHTML =
      "You are " + age + " years old, so you can see G rated movies."
  }
}