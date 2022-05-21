const btn = document
  .querySelector(".dropdown__btn")
  .addEventListener("click", () => {
    const dropdowncontent = document
      .querySelector(".dropdown__content")
      .classList.toggle("hidden");
  });
