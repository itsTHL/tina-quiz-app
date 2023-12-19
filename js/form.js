const formMain = document.querySelector('[data-js="form-main"]');
const form = document.querySelector('[data-js="form"]');

const textAreaInputQuestion = document.querySelector(
  '[data-js="text-area-input-question"]'
);
const textAreaInputAnswer = document.querySelector(
  '[data-js="text-area-input-answer"]'
);
const MAX_CHARACTERS = 150;
const charactersLeftQuestion = document.querySelector(
  '[data-js="remaining-characters-question"]'
);
const charactersLeftAnswer = document.querySelector(
  '[data-js="remaining-characters-answer"]'
);

textAreaInputQuestion.addEventListener("input", (event) => {
  charactersLeftQuestion.textContent =
    MAX_CHARACTERS - parseInt(event.target.value.length);
});

textAreaInputAnswer.addEventListener("input", (event) => {
  charactersLeftAnswer.textContent =
    MAX_CHARACTERS - parseInt(event.target.value.length);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  /*old solution before I realized innerHTML exists:

  const newQuestionCard = document.createElement("div");
  newQuestionCard.classList.add("question-card");
  const newQuestion = document.createElement("h2");
  newQuestionCard.append(newQuestion);
  const newAnswer = document.createElement("h3");
  newQuestionCard.append(newAnswer);
  const newTag = document.createElement("button");
  newTag.classList.add("btn-tags");
  newQuestionCard.append(newTag);

  const newQuestion;
  newQuestion.textContent = "Your question: " + data["your-question"];
  newAnswer.textContent = "Your answer: " + data["your-answer"];
  newTag.textContent = data["your-tag"];

  */

  const newQuestionSection = document.createElement("section");
  newQuestionSection.classList.add("question-card");

  const newQuestion = data["your-question"];
  const newAnswer = data["your-answer"];
  const newTag = data["your-tag"];

  newQuestionSection.innerHTML = `
<img
          src="./resources/bookmark.png"
          alt="icon of a bookmark"
          class="bookmark"
          data-js="bookmark-button"
        />
        <h2>${newQuestion}</h2>
        <button class="show-answer" data-js="show-answer-button">
          Show Answer
        </button>
        <h3 data-js="answer">${newAnswer}</h3>
        <div class="tags">
          <button class="btn-tags">${newTag}</button>
        </div>
`;

  formMain.append(newQuestionSection);

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

  answer.classList.add("hidden");

  showAnswerButton.addEventListener("click", (event) => {
    answer.classList.toggle("hidden");

    if (showAnswerButton.innerText === "Show Answer") {
      showAnswerButton.innerText = "Hide Answer";
    } else {
      showAnswerButton.innerText = "Show Answer";
    }
  });
  charactersLeftQuestion.textContent = MAX_CHARACTERS;
  charactersLeftAnswer.textContent = MAX_CHARACTERS;
  event.target.reset();
});
