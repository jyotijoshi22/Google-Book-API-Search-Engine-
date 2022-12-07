const handleFetch = async (searchVal) => {
  //const startIndex = (page - 1) * maxResults;

  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchVal}`;

  const response = await fetch(url);
  const json = await response.json();
  const data = json.items;
  return data;
};

//console.log(handleFetch("Holmes")); Checking result of search is available in console
const search = document.getElementById("searchBook"); //variable defined for  input text
const getData = document.getElementById("getData"); //variable of button

getData.addEventListener("click", async () => {
  const getSearchBook = await handleFetch(search.value);

  //Use forEach to iterate  each data received from json
  getSearchBook.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      console.log(`${key} ${value}`);
    });
  });
});
