const handleFetch = async (searchVal) => {
  //const startIndex = (page - 1) * maxResults;

  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchVal}`;

  const response = await fetch(url);
  const data = await response.json();
  populateData(data);
};

function populateData(obj) {
  const section = document.querySelector("section");
  const books = obj.items;

  for (const book of books) {
    const bookTitle = document.createElement("h1");
    //const bookImg = document.createElement("img");
    const bookAuthor = document.createElement("h3");
    const bookDesc = document.createElement("p");

    // bookImg.src = book.imageLinks;
    bookTitle.textContent = `Title: ${book.volumeInfo.title}`;

    const authorName = book.volumeInfo.authors;
    for (const author of authorName) {
      const listItem = document.createElement("h4");
      listItem.textContent = author;
      bookAuthor.appendChild(listItem);
    }

    bookDesc.textContent = `Description:${book.volumeInfo.description}`;

    //section.appendChild(bookImg);
    section.appendChild(bookTitle);
    section.appendChild(bookAuthor);
    section.appendChild(bookDesc);
  }
}

const search = document.getElementById("searchBook"); //variable defined for  input text
const getData = document.getElementById("getData"); //variable of button

getData.addEventListener("click", async () => {
  handleFetch(search.value);
});
