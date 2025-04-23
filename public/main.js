const updateBtn = document.querySelector('#update-button');
const deleteBtn = document.querySelector('#delete-button');


import replaceWithDarthVaderQuote from "./js/replaceWithDarthVaderQuote.js";
import deleteFirstVaderQuote from "./js/deleteFirstVaderQuote.js";

updateBtn.addEventListener('click', replaceWithDarthVaderQuote);
deleteBtn.addEventListener('click', deleteFirstVaderQuote);