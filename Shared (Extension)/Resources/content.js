console.log("Content script has come alive 🚀");

function colourTheBackground() {
  document.body.style.backgroundColor = "red";
}

document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", colourTheBackground)
  : colourTheBackground();
