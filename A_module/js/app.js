
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


// const modal = document.querySelector("dialog")
// const closeBtn = document.querySelector(".closeBtn");

// closeBtn.addEventListener("click", () => {
//   modal.style.display = "none"
// })


document.addEventListener('DOMContentLoaded', () => {
  const hoverImg = document.querySelector('.cuser');
  const hoverBg = document.querySelector('.notice');

  // 마우스가 notice 영역에 들어올 때 이미지를 보이게 하고 위치를 업데이트
  hoverBg.addEventListener('mousemove', (event) => {
    const rect = hoverBg.getBoundingClientRect(); // notice 영역의 좌표를 가져옴
    const mouseX = event.clientX - rect.left; // notice 내부에서의 마우스 X 좌표
    const mouseY = event.clientY - rect.top;  // notice 내부에서의 마우스 Y 좌표

    const cursorHalfWidth = hoverImg.clientWidth / 2;
    const cursorHalfHeight = hoverImg.clientHeight / 2;

    hoverImg.style.left = `${mouseX - cursorHalfWidth}px`;
    hoverImg.style.top = `${mouseY - cursorHalfHeight}px`;
    hoverImg.style.display = 'block'; // 이미지를 보이도록 설정
});

// 마우스가 notice 영역을 벗어날 때 이미지를 숨기기
hoverBg.addEventListener('mouseleave', () => {
    hoverImg.style.display = 'none';
});

// 마우스 커서를 숨기고 이미지만 보이게 설정
hoverBg.style.cursor = 'none'; // 전체 문서에서 마우스 커서 숨기기
  hoverImg.style.display = 'none'; // 초기에 이미지 숨기기