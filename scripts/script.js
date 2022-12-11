import { populateData } from "./book.js";

//HOME PAGE SEARCH AND SUBMIT
const search = document.getElementById("searchBook"); //variable defined for  input text
const getData = document.getElementById("getData"); //variable of button

getData.addEventListener("click", async () => {
  handleFetch(search.value);
});

const handleFetch = async (searchVal) => {
  //const startIndex = (page - 1) * maxResults;

  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchVal}`;

  const response = await fetch(url);
  const data = await response.json();
  populateData(data);
};

// const handleFetch = async (searchVal, page, maxResults) => {
//   const startIndex = (page - 1) * maxResults;

//   const url = `https://www.googleapis.com/books/v1/volumes?q=${searchVal}&startIndex=${startIndex}&maxResults=${maxResults}`;

//   const response = await fetch(url);
//   const data = await response.json();
//   populateData(data);
// };
