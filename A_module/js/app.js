// const modal = document.querySelector("dialog")
// const closeBtn = document.querySelector(".closeBtn");

// closeBtn.addEventListener("click", () => {
//   modal.style.display = "none"
// })

const slide = document.querySelector(".slide")
const back = document.querySelector(".back");
const go = document.querySelector(".go");
const slideTxT = document.querySelector(".slideCount > span")

back.addEventListener("click", () => {
  let i = 1;
  if (i == 3) {
    i = 0;
  }
  slide.style.marginLeft = `${450 * i}px`;
  i++;
});
go.addEventListener("click", () => {
  let i = 1;
  if (i == 3) {
    i = 0;
  }
  slide.style.marginLeft = `-${1000 * i}px`;
  i++;
})