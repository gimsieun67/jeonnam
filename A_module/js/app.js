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

// scripts.js
// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const slidesContainer = document.querySelector(".slides");
    const slideItems = document.querySelectorAll(".slide");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    const slideCount = slideItems.length;
    const slideWidth = 340; // 슬라이드 하나의 너비 (300px) + 간격 (2 * 20px)
    let currentIndex = 3; // 초기 인덱스는 첫 번째 클론 이후 세 번째 슬라이드로 설정

    // 슬라이드 클론 생성
    const firstClones = [];
    const lastClones = [];

    // 앞에 추가할 클론 (마지막 3개)
    for (let i = slideCount - 3; i < slideCount; i++) {
        const clone = slideItems[i].cloneNode(true);
        slidesContainer.insertBefore(clone, slideItems[0]);
        firstClones.push(clone);
    }

    // 뒤에 추가할 클론 (처음 3개)
    for (let i = 0; i < 3; i++) {
        const clone = slideItems[i].cloneNode(true);
        slidesContainer.appendChild(clone);
        lastClones.push(clone);
    }

    // 초기 슬라이드 위치 설정
    slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

    // 슬라이드 이동 함수
    function moveToSlide(index) {
        slidesContainer.style.transition = 'transform 0.5s ease-in-out';
        slidesContainer.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    // 슬라이드 위치 초기화 함수
    function resetSlide() {
        slidesContainer.style.transition = 'none';
        if (currentIndex >= slideCount + 3) {
            currentIndex = 3;
            slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        } else if (currentIndex < 3) {
            currentIndex = slideCount;
            slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        }
    }

    // 이전 버튼 클릭 이벤트
    prevButton.addEventListener("click", () => {
        currentIndex--;
        moveToSlide(currentIndex);
    });

    // 다음 버튼 클릭 이벤트
    nextButton.addEventListener("click", () => {
        currentIndex++;
        moveToSlide(currentIndex);
    });

    // 전환 완료 후 슬라이드 위치 초기화
    slidesContainer.addEventListener('transitionend', resetSlide);
});


