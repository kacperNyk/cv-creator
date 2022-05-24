import {
  AddBtnsElements,
  removeContentCreator,
  renderCreatorDatePlace,
} from "./left/addContent.js";

const dropdownElemBtnsArray = [...document.querySelectorAll("#dropdown-btn")];
dropdownElemBtnsArray.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("content-unactive");
    btn.classList.toggle("clicked");
    const parent = btn.parentElement;
    const destonation = parent.nextElementSibling.firstElementChild;
    console.log(destonation);
    renderCreatorDatePlace(destonation);
  });
});
removeContentCreator();
AddBtnsElements();
