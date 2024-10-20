const array = [{
    text: "",
    category:""
}]

const newQuote = document.getElementById("newQuoteText");
const category = document.getElementById("newQuoteCategory");
newQuote.addEventListener("click", addQuote);
const quoteDisplay = document.getElementById("quoteDisplay");

function showRandomQuote(){
const random = (document.getElementById("quoteDisplay").innerHTML = array)
const myRandom = Math.random(random);
return myRandom;
}

function createAddQuoteForm(){
  const ele1 = document.createElement("div");
  const add = document.appendChild(ele1);
  const input = document.createElement("input");
  const add2 = document.appendChild(input)
}

function addQuote(){
 createAddQuoteForm();
}