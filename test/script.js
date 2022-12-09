// async function populate() {
//   const requestURL =
//     "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
//   const request = new Request(requestURL);

//   const response = await fetch(request);
//   //const superHeroesText = await response.text();
//   const superHeroes = await response.json();

//   //const superHeroes = JSON.parse(superHeroesText);

//   populateHeroes(superHeroes);
// }

// function populateHeroes(obj) {
//   const section = document.querySelector("section");
//   const heroes = obj.members;

//   for (const hero of heroes) {
//     const myArticle = document.createElement("article");
//     const myH2 = document.createElement("h2");
//     const myPara1 = document.createElement("p");
//     const myPara2 = document.createElement("p");
//     const myPara3 = document.createElement("p");
//     const myList = document.createElement("ul");

//     myH2.textContent = hero.name;
//     myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
//     myPara2.textContent = `Age: ${hero.age}`;
//     myPara3.textContent = "Superpowers:";

//     const superPowers = hero.powers;
//     for (const power of superPowers) {
//       const listItem = document.createElement("li");
//       listItem.textContent = power;
//       myList.appendChild(listItem);
//     }

//     myArticle.appendChild(myH2);
//     myArticle.appendChild(myPara1);
//     myArticle.appendChild(myPara2);
//     myArticle.appendChild(myPara3);
//     myArticle.appendChild(myList);

//     section.appendChild(myArticle);
//   }
// }

// populate();
const mainModal = document.createElement("div");
mainModal.style.display = "none";
bookInfoContainer.addEventListener("click", () => {
  //create some elements for inf we want to show

  const modalBookInfoContainer = document.createElement("div");
  const modalBookTitle = document.createElement("h1");
  if (mainModal.style.display == "none") {
    mainModal.style.display = "block";
  } else mainModal.style.display = "none";
  modalBookTitle.textContent = book.volumeInfo.title;
  modalBookInfoContainer.appendChild(modalBookTitle);
});
