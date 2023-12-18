const formMain = document.querySelector('[data-js="form-main"]');
const form = document.querySelector('[data-js="form"]');

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
          <button class="btn-tags">#tagtwo</button>
          <button class="btn-tags">#tagthree</button>
        </div>
`;

  formMain.append(newQuestionSection);

  // event.target.reset();
});
