// const modal = document.querySelector("dialog")
// const closeBtn = document.querySelector(".closeBtn");

// closeBtn.addEventListener("click", () => {
//   modal.style.display = "none"
// })
// const slidesContainer = document.querySelector(".slides");
// // .slide라는 클래스를 가진 모든 슬라이드를 선택합니다.
// const slideItems = document.querySelectorAll(".slide");
// // "Previous" 버튼과 "Next" 버튼을 선택합니다.
// const prevButton = document.getElementById("prev");
// const nextButton = document.getElementById("next");

document.addEventListener("DOMContentLoaded", () => {
  const slide = document.querySelector(".slides")
  const slideItems = document.querySelector(".bg")
const prevButton = document.querySelector(".back");
const nextButton = document.querySelector(".go");

  // 슬라이드 하나의 너비와 여백을 더한 값입니다. (슬라이드 300px + 간격 40px)
  const slideWidth = 340;
  // 현재 보여지고 있는 슬라이드의 인덱스 (초기값은 0)
  let currentIndex = 0;

  // 슬라이드가 클론되면, 총 슬라이드의 개수는 원래 슬라이드의 개수보다 많아집니다.
  const totalSlides = slideItems.length;

  // 슬라이드들을 앞뒤로 클론하여 무한히 이어지는 것처럼 보이게 만듭니다.
  function cloneSlides() {
      for (let i = 0; i < totalSlides; i++) {
          // 처음 3개의 슬라이드를 클론해서 맨 뒤에 추가합니다.
          let cloneFirst = slideItems[i].cloneNode(true);
          slide.appendChild(cloneFirst);
          
          // 마지막 3개의 슬라이드를 클론해서 맨 앞에 추가합니다.
          let cloneLast = slideItems[totalSlides - 1 - i].cloneNode(true);
          slide.insertBefore(cloneLast, slideItems[0]);
      }
  }

  // 슬라이드를 특정 위치로 이동시키는 함수입니다.
  function moveToSlide(index) {
      slide.style.transition = 'transform 0.5s'; // 슬라이드가 부드럽게 이동하도록 설정합니다.
      slide.style.transform = `translateX(-${slideWidth * index}px)`; // 슬라이드를 왼쪽으로 이동합니다.
  }

  // 슬라이드 위치를 초기화하는 함수입니다.
  function resetSlide() {
      slide.style.transition = 'none'; // 전환 애니메이션을 제거합니다.
      
      if (currentIndex >= totalSlides) {
          currentIndex = 0; // 마지막 슬라이드에서 첫 번째 슬라이드로 돌아갑니다.
          slide.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
      } else if (currentIndex < 0) {
          currentIndex = totalSlides - 1; // 첫 번째 슬라이드에서 마지막 슬라이드로 돌아갑니다.
          slide.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
      }
  }

  // "Previous" 버튼을 클릭했을 때 슬라이드를 왼쪽으로 이동합니다.
  prevButton.addEventListener("click", () => {
      currentIndex--;
      moveToSlide(currentIndex);
  });

  // "Next" 버튼을 클릭했을 때 슬라이드를 오른쪽으로 이동합니다.
  nextButton.addEventListener("click", () => {
      currentIndex++;
      moveToSlide(currentIndex);
  });

  // 슬라이드 전환이 완료된 후 슬라이드 위치를 초기화합니다.
  slide.addEventListener('transitionend', resetSlide);

  // 클론된 슬라이드를 추가합니다.
  cloneSlides();
});
