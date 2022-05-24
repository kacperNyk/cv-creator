export function AddBtnsElements() {
  const BtnsInputElements = [...document.querySelectorAll("#add-input-el-btn")];
  BtnsInputElements.forEach((btn) => {
    btn.addEventListener("click", () => {
      const elTitle = btn.lastChild.textContent;
      console.log(elTitle);
      const destElem = document.querySelector(".optional__inputs__added__con");
      const pTitle = document.createElement("p");
      pTitle.textContent = elTitle;
      pTitle.classList.add("elem__title");
      const inputEl = document.createElement("input");
      inputEl.setAttribute("type", "text");
      destElem.append(pTitle, inputEl);
      btn.classList.add("hidden");
    });
  });
}
export function renderCreatorDatePlace(dest) {
  const templateTitleLevel = document.querySelector(".content__creator-title-level");
  const template = templateTitleLevel.content.cloneNode(true);
  dest.appendChild(template);
  console.log(dest)
}

export function removeContentCreator() {
  const creatorRemoveBtnArr = [
    ...document.querySelectorAll("#creator-deleate-btn"),
  ];
  const contentCreatorsArr = document.querySelectorAll("#content-creator-con");
  console.log(contentCreatorsArr);
  console.log(creatorRemoveBtnArr);
  creatorRemoveBtnArr.forEach((btn) => {
    btn.addEventListener("click", () => {
      contentCreatorsArr[creatorRemoveBtnArr.indexOf(btn)].classList.add(
        "hidden"
      );
      console.log(creatorRemoveBtnArr.indexOf(btn));
    });
  });
}
