const form = document.querySelector('[data-js="form"]');
// const formSubmitButton = document.querySelector(
//   '[data-js="form-submit-button"]'
// );

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
});
