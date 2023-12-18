const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

bookmarkButton.addEventListener("click", (event) => {
  bookmarkButton.src = "./resources/bookmark_filled.png";
});
