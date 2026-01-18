const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const warning = document.getElementById("warning");

const maxLength = 200;

textarea.addEventListener("input", () => {
  if (textarea.value.length > maxLength) {
    textarea.value = textarea.value.substring(0, maxLength);
    warning.textContent = "Character limit exceeded!";
  } else {
    warning.textContent = "";
  }

  counter.textContent = `${textarea.value.length} / ${maxLength} characters`;
});
