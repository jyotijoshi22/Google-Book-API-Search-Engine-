import { populateData } from "./book.js";

//HOME PAGE SEARCH AND SUBMIT
const search = document.getElementById("searchBook"); //variable defined for  input text
const getData = document.getElementById("getData"); //variable of button

let currentPage = 1;
let maxResults = 20;

getData.addEventListener("click", async () => {
  const section = document.querySelector("section");
  section.innerHTML = "";
  handleFetch(search.value, currentPage, maxResults);
});

const nextPage = () => {
  currentPage++;
  //TODO: enable backPage if disabled
  handleFetch(search.value, currentPage, maxResults);
};

const backPage = () => {
  currentPage--;
  //TODO: disable backPage button if currentPage == 1
  handleFetch(search.value, currentPage, maxResults);
};
// const handleFetch = async (searchVal) => {
//   const url = `https://www.googleapis.com/books/v1/volumes?q=${searchVal}`;

//   const response = await fetch(url);
//   const data = await response.json();
//   populateData(data);
// };

const handleFetch = async (searchVal, page, maxResults) => {
  const showResult = document.getElementById("showResult");

  const startIndex = (page - 1) * maxResults;

  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchVal}&startIndex=${startIndex}&maxResults=${maxResults}`;

  const response = await fetch(url);
  const data = await response.json();
  const totalResults = data.totalItems;
  if (totalResults == 0) {
    showResult.textContent = `No results found for: ${search.value}`;
  } else {
    showResult.textContent = `Showing results for: ${search.value}`;
  }

  populateData(data);
};
