const buttonToggle = document.querySelector('[data-js="dm-btn"');
const bodyElement = document.querySelector('[data-js="body"');

let positionIndex = 0;

buttonToggle.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");

  const newPositionIndex = (positionIndex + 1) % 2;
  buttonToggle.className = buttonToggle.className.replace(
    `position--${positionIndex}`,
    `position--${newPositionIndex}`
  );
  positionIndex = newPositionIndex;

  console.log("works");
});
