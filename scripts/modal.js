export function openModal(book, section) {
  const mainModal = document.createElement("div");
  mainModal.className = "modal";

  //const nav = document.createElement("nav");
  const modalClose = document.createElement("button");
  modalClose.textContent = "X";

  //mainModal.appendChild(nav);

  modalClose.addEventListener("click", () => {
    mainModal.style.display = "none";
  });

  const modalBookInfoContainer = document.createElement("div");
  const modalBookTitle = document.createElement("h4");
  const modalSubtitle = document.createElement("h4");
  const modalImage = document.createElement("img");
  const modalAuthor = document.createElement("h4");
  const modalDes = document.createElement("p");

  //Classes assigned to HTML tags
  modalBookInfoContainer.className = "modal__container";
  modalClose.className = "modal__container__button";
  modalBookTitle.className = "modal__container__title";
  modalSubtitle.className = "modal__container__subtitle";
  modalImage.className = "modal__container__img";
  modalDes.className = "modal__container__desc";

  //Adding content to modal
  modalBookInfoContainer.appendChild(modalClose);
  modalBookTitle.textContent = book.volumeInfo.title;
  modalSubtitle.textContent = book.volumeInfo.subtitle;
  modalImage.src = book.volumeInfo.imageLinks.thumbnail;
  const modalAuthorName = book.volumeInfo.authors;
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

  //append to mainmodal
  mainModal.appendChild(modalBookInfoContainer);

  mainModal.style.display = "flex";

  section.appendChild(mainModal);
}
