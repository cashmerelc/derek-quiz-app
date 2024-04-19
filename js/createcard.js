const form = document.querySelector('[data-js="form"]');
const newCardsSection = document.querySelector('[data-js="new-cards"]');

/* ----------------------------------------------------------------
                        Create new card
---------------------------------------------------------------- */

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get data from form submission
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  // Create question card container and add appropriate class
  const questionCard = document.createElement("div");
  questionCard.classList.add("question-card");

  // Create img, set src, and add class
  const bookmarkImage = document.createElement("img");
  bookmarkImage.src = "./images/bookmark.png";
  bookmarkImage.classList.add("btn-bookmark");

  // Create h2 and add question text
  const questionText = document.createElement("h2");
  questionText.textContent = data["new-question"];

  // Create button to show answer
  const answerButton = document.createElement("button");
  answerButton.textContent = "Show answer";
  answerButton.classList.add("btn-show-answer");

  // Create h3 and add answer text and class
  const answerText = document.createElement("h3");
  answerText.textContent = data["new-answer"];
  answerText.classList.add("answer");

  // Create div to contain tags
  const tagsDiv = document.createElement("div");
  tagsDiv.classList.add("tag-section");

  // Create tag
  const tag = document.createElement("div");
  tag.classList.add("tag");
  tag.textContent = data["new-tags"];

  // Add tag to tags container
  tagsDiv.append(tag);

  // Add question, bookmark button, answer button, answer, and tag container to question card
  questionCard.append(
    bookmarkImage,
    questionText,
    answerButton,
    answerText,
    tagsDiv
  );

  // Add new question card to page below the form
  newCardsSection.append(questionCard);
});
