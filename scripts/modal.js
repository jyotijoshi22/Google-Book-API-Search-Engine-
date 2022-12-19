export function openModal(book, section) {
  const modalClose = document.createElement("button");
  modalClose.textContent = "X";

  //Creating Elements for MODAL CONTAINER
  const modalBookInfoContainer = document.createElement("div");
  const modalBookTitle = document.createElement("h4");
  const modalSubtitle = document.createElement("h4");
  const modalImage = document.createElement("img");
  const modalAuthor = document.createElement("h4");
  const modalDes = document.createElement("p");

  modalClose.addEventListener("click", () => {
    modalBookInfoContainer.style.display = "none";
  });

  //ASSINGNING CLASSES TO ELEMENTS
  modalBookInfoContainer.className = "mainContainer__container";
  modalClose.className = "mainContainer__container__button";
  modalBookTitle.className = "mainContainer__container__title";
  modalSubtitle.className = "mainContainer__container__subtitle";
  modalImage.className = "mainContainer__container__img";
  modalDes.className = "mainContainer__container__desc";

  //Adding content to modal
  modalBookInfoContainer.appendChild(modalClose);
  modalBookTitle.textContent = book.volumeInfo.title;
  modalSubtitle.textContent = book.volumeInfo.subtitle;
  modalImage.src = book.volumeInfo.imageLinks
    ? book.volumeInfo.imageLinks.thumbnail
    : "./image/defaultBook.png";

  const modalAuthorName = book.volumeInfo.authors; //authors are more than one
  for (const author of modalAuthorName) {
    const listItem = document.createElement("h4");
    listItem.textContent = author;
    modalAuthor.appendChild(listItem);
  }
  modalDes.textContent = book.volumeInfo.description;

  //Add HTML Tags to its parent din
  modalBookInfoContainer.appendChild(modalImage);
  modalBookInfoContainer.appendChild(modalBookTitle);
  modalBookInfoContainer.appendChild(modalSubtitle);
  modalBookInfoContainer.appendChild(modalAuthor);
  modalBookInfoContainer.appendChild(modalDes);

  modalBookInfoContainer.style.display = "flex";

  section.appendChild(modalBookInfoContainer);
}
