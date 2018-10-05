var feedback = document.querySelector(".feedback-button");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var name = popup.querySelector("[name=feedback-name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=feedback-email]");
var review = popup.querySelector("[name=feedback-text]");

feedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  // name.focus();
  
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  if (!name.value || !email.value || !review.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth;
    popup.classList.add("modal-error");
  } 
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});