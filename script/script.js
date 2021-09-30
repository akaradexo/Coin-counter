"use strict";

//declare variables
const money = [1, 2, 5, 10, 20, 50, 100,200, 500, 2000];
const billAmount = document.getElementById("billAmount");
const cashAmount = document.getElementById("cashAmount");
const inputForm = document.querySelector("form");
const outputDiv = document.getElementById("output");
const displayOutput = document.getElementById("money-output");
const returnMoney = document.getElementById("return-money");

//functions
//1
const toggleDisabled = function() {
  if (billAmount.value) cashAmount.disabled = false;
  else cashAmount.disabled = true;
}

//2
const submitHandle = function(e) {
  e.preventDefault();
  if(billAmount.value <= cashAmount.value){
    displayOutput.style.display="block";
    covertToChangeAmount(billAmount.value,cashAmount.value);
    // console.log("enter to the next stage")
  }else{
    alert("Please enter the case amount higher than bill amount");
  }
}

//3
const covertToChangeAmount = function(bill,cash){
  // console.log(cash,bill);
  const amountToReturn = {};
  let changeToGive  = cash - bill;
  console.log(changeToGive);
  returnMoney.innerText = "₹"+changeToGive;
  //bill = cash
  if (changeToGive === 0) {
    amountToReturn[0] = 0;
  }
  let i = money.length - 1;
  while(changeToGive > 0){
    if(changeToGive >= money[i]){
      amountToReturn[money[i]] = Math.floor(changeToGive / money[i]);
      changeToGive = Math.floor(changeToGive % money[i]);
    }
    i -= 1;
  }
  console.log(amountToReturn);
  displayMoney(amountToReturn);
}

//3
const displayMoney = function(amountToReturn){
  const amount = Object.keys(amountToReturn);
  console.log(amount);
  outputDiv.innerHTML = amount.map((mon) =>{
    return(
      "<ol class='money-item'>" +
        "<li>"+ mon +"</li>" +
        "<li>"+"X"+"</li>" +
        "<li>"+ amountToReturn[mon] +"</li>" +
      "</ol>"
    );
  })
  .join("");
}

// add event listeners

//1
billAmount.addEventListener("change", toggleDisabled);
//2
inputForm.addEventListener("submit", submitHandle);
