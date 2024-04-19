// Get first bookmark image on the index page
const bookmark = document.querySelector(".first-question img");
// console.log(bookmark.getAttribute("src"));

let bookmarkChecked = false;

bookmark.addEventListener("click", () => {
  if (!bookmarkChecked) {
    bookmark.setAttribute("src", "./images/bookmark_filled.png");
    bookmarkChecked = true;
  } else {
    bookmark.setAttribute("src", "./images/bookmark.png");
    bookmarkChecked = false;
  }
});
