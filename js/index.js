const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

bookmarkButton.addEventListener("click", (event) => {
  if (bookmarkButton.src.endsWith("bookmark.png")) {
    bookmarkButton.src = "./resources/bookmark_filled.png";
  } else {
    bookmarkButton.src = "./resources/bookmark.png";
  }
});
