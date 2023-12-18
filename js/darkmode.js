const buttonToggle = document.querySelector('[data-js="dm-btn"');
const bodyElement = document.querySelector('[data-js="body"');

buttonToggle.addEventListener("click", () => {
  console.log("working");
  bodyElement.classList.toggle("dark");
});
