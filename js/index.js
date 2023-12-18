const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

bookmarkButton.addEventListener("click", (event) => {
  if (bookmarkButton.src.endsWith("bookmark.png")) {
    bookmarkButton.src = "./resources/bookmark_filled.png";
  } else {
    bookmarkButton.src = "./resources/bookmark.png";
  }
});

const showAnswerButton = document.querySelector(
  '[data-js="show-answer-button"]'
);
const answer = document.querySelector('[data-js="answer"]');

showAnswerButton.addEventListener("click", (event) => {
  answer.classList.toggle("hidden");
});
