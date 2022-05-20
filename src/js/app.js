const btn = [...document.querySelectorAll(".dropdown__btn")];

btn.forEach((btnn) => {
  btnn.addEventListener("click", () => {
    btnn.nextElementSibling.classList.toggle("hidden");
  });
});
