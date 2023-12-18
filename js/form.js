const formMain = document.querySelector('[data-js="form-main"]');
const form = document.querySelector('[data-js="form"]');
// const formSubmitButton = document.querySelector(
//   '[data-js="form-submit-button"]'
// );

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newQuestionCard = document.createElement("div");
  newQuestionCard.classList.add("question-card");
  const newQuestion = document.createElement("h2");
  newQuestionCard.append(newQuestion);
  const newAnswer = document.createElement("h3");
  newQuestionCard.append(newAnswer);
  const newTag = document.createElement("button");
  newTag.classList.add("btn-tag");
  newQuestionCard.append(newTag);

  newQuestion.textContent = "Your question: " + data["your-question"];
  newAnswer.textContent = "Your answer: " + data["your-answer"];
  newTag.textContent = data["your-tag"];

  formMain.append(newQuestionCard);

  // event.target.reset();
});
