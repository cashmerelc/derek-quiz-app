/* ----------------------------------------------------------------
                        Bookmarks
---------------------------------------------------------------- */

// Get first bookmark image on the index page
const bookmark = document.querySelector(".first-question img");

// Establish all bookmarks are not filled
let bookmarkChecked = false;

// Change bookmark image based on whether it is already filled or not
bookmark.addEventListener("click", () => {
  if (!bookmarkChecked) {
    bookmark.setAttribute("src", "./images/bookmark_filled.png");
    bookmarkChecked = true;
  } else {
    bookmark.setAttribute("src", "./images/bookmark.png");
    bookmarkChecked = false;
  }
});

/* ----------------------------------------------------------------
                        Answers
---------------------------------------------------------------- */

// Get first answer button on index page
const toggleAnswerButton = document.querySelector(
  ".first-question .btn-show-answer"
);

// Get first answer on index page
const answer = document.querySelector(".first-question .answer");

// Establish the answer is not visible
let answerVisible = false;

// If answer is hidden, make it visible and change button text. Otherwise hide the answer
toggleAnswerButton.addEventListener("click", () => {
  if (!answerVisible) {
    answer.style.visibility = "visible";
    toggleAnswerButton.textContent = "Hide Answer";
    answerVisible = true;
  } else {
    answer.style.visibility = "hidden";
    toggleAnswerButton.textContent = "Show Answer";
    answerVisible = false;
  }
});
