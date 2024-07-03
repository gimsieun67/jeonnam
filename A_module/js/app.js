const modal = document.querySelector("dialog")
const closeBtn = document.querySelector(".closeBtn");

closeBtn.addEventListener("click", () => {
  modal.style.display = "none"
})