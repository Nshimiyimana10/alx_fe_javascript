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

const store = localStorage.setItem("Quote", array)
const stored = localStorage.getItem("Quote");
const saving = sessionStorage.setItem("lastViewed", lastViewed);
function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }

  <input type="file" id="importFile" accept=".json" onchange="importFromJsonFile(event)" />

  function exportToJsonFile(){
    const application = JSON.stringify("Blob");
    const json = JSON.parse("application/json");
  }

  function importFromJsonFile(){

  }

  function populateCategories(){
   const option = newQuote.value;
   option.textContent = json;
   const selectedCategory = JSON.parse(option);
  }
  const lastCategory = localStorage.setItem("category",JSON.stringify(array[0]))
  function filterQuotes(){
   const categoryFilter = document.createElement("li");
   const list = document.getElementById("newQuotes");
   list.appendChild("li");
   const quotes = array.map((element) =>{
    element + "added";
   })
  }

  function fetchQuotesFromServer(){

  }
  
  const fetchUserData = async function(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
    const dataContainer = document.getElementById("api-data");
    try {
      const response = await fetch(apiUrl);
      const users = await response.json();
      dataContainer.innerHTML = '';
      method: "POST"
      headers:{
        "Content-Type"
        setInterval((item) =>{
            console.log("Quotes synced with server!");
        }, 3000)
      }
  
      console.log(users);

      const userList = document.createElement("ul");
      users.forEach((user) =>{
        const myUser = user.name;
        const li = document.createElement("li");
        li.textContent = myUser;
        userList.appendChild(li);
        dataContainer.appendChild(userList);
      })
  
  }
  catch(error){
    error.textContent ="Failed to load user data."
  }
};

function syncQuotes(){

}

//this the end of our program