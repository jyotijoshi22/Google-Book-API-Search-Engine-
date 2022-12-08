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
    const bookInfoContainer = document.createElement("div");
    const bookTitle = document.createElement("h1");
    const bookImg = document.createElement("img");
    const bookAuthor = document.createElement("h3");
    const moreInfoBtn = document.createElement("button");
    //const bookDesc = document.createElement("p");

    if (book.volumeInfo.imageLinks) {
      bookImg.src = book.volumeInfo.imageLinks.thumbnail;
      bookImg.alt = `Title: ${book.volumeInfo.title}`;
      bookInfoContainer.appendChild(bookImg);
    } else {
      bookTitle.textContent = `Title: ${book.volumeInfo.title}`;
      bookInfoContainer.appendChild(bookTitle);
    }

    moreInfoBtn.textContent = "MORE INFO";
    moreInfoBtn.style.border = "none";
    //bookImg.src = book.volumnetInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail :  ;
    //bookTitle.textContent = `Title: ${book.volumeInfo.title}`;

    const authorName = book.volumeInfo.authors;
    for (const author of authorName) {
      const listItem = document.createElement("h4");
      listItem.textContent = author;
      bookAuthor.appendChild(listItem);
    }

    //bookDesc.textContent = `${book.volumeInfo.description}`;
    bookInfoContainer.appendChild(bookAuthor);
    bookInfoContainer.appendChild(moreInfoBtn);

    section.appendChild(bookInfoContainer);
  }
}

const search = document.getElementById("searchBook"); //variable defined for  input text
const getData = document.getElementById("getData"); //variable of button

getData.addEventListener("click", async () => {
  handleFetch(search.value);
});
