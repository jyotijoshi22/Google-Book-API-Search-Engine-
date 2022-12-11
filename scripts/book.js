import { openModal } from "./modal.js";

export function populateData(obj) {
  const section = document.querySelector("section");
  const books = obj.items;
  section.className = "mainContainer";

  for (const book of books) {
    const bookInfoContainer = document.createElement("div");

    const bookTitle = document.createElement("h1");
    const bookImg = document.createElement("img");
    const bookAuthor = document.createElement("h3");

    bookInfoContainer.className = "mainContainer__bookContainer";
    bookTitle.className = "mainContainer__bookContainer__title";
    bookImg.className = "mainContainer__bookContainer__img";
    bookAuthor.className = "mainContainer__bookContainer__auth";

    if (book.volumeInfo.imageLinks) {
      bookImg.src = book.volumeInfo.imageLinks.thumbnail;
      bookImg.alt = `Title: ${book.volumeInfo.title}`;
      bookInfoContainer.appendChild(bookImg);
    } else {
      bookImg.src = "./image/defaultBook.png";
      bookInfoContainer.appendChild(bookImg);
    }

    bookTitle.textContent = book.volumeInfo.title;

    const authorName = book.volumeInfo.authors;
    for (const author of authorName) {
      const listItem = document.createElement("h4");
      listItem.textContent = author;
      bookAuthor.appendChild(listItem);
    }
    bookInfoContainer.appendChild(bookTitle);
    bookInfoContainer.appendChild(bookAuthor);
    section.appendChild(bookInfoContainer);

    //Opens Modal
    bookInfoContainer.addEventListener("click", () => {
      openModal(book, section);
    });
  }
}
