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
  const creator = `<div class="content__creator__con" id="content-creator-con">
    <div class="content__creator content__creator-date-place">
        <label>
            <label for="input">
                <p class="elem__title">Position</p>
                <input type="text" id="work-poaition-input">
            </label>
            <div class="half__inputs__con">
                <div class="input__half__elem input-half">
                    <label for="input">
                        <p class="elem__title ">Company name</p>
                        <input type="text" id="company-name">
                    </label>
                </div>
                <div class="input__half__elem input-half">
                    <label for="input">                                               
                        <p class="elem__title ">Location</p>
                        <input type="text" id="company-place">
                    </label> 
                </div>
            </div>
            <div class="half__inputs__con">
                <div class="input__half__elem input-half">
                    <label for="input">
                        <p class="elem__title ">Start date</p>
                        <input type="text" placeholder="dd.mm.rrrr" onfocus="(this.type='date')">
                    </label> 
                </div>
                <div class="input__half__elem input-half">
                    <label for="input">
                        <p class="elem__title ">End date</p>
                        <input type="text" placeholder="dd.mm.rrrr" onfocus="(this.type='date')">
                    </label> 
                </div>
            </div>
        </label>
        <div class="create__description__input">
            <p class="elem__title ">Description</p>
            <textarea type="text" id="description" class="create__description__input__elem"></textarea>
        </div>
        <div class="creator__buttons__con">
            <button class="creator__deleate__btn" id="creator-deleate-btn"><span class="material-symbols-outlined">delete</span></button>
            <button class="creator__done__btn" id="creator-done-btn"><span class="material-symbols-outlined">done</span>Done</button>
        </div>
    </div>
    <button class="add__content__btn"><span class="material-symbols-outlined">add</span><span>Add experience</span></button>
</div>`;
  document.body.append = creator;
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
