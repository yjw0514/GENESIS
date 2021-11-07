// Hero Slide 구현

let divSlide = document.querySelectorAll('.slide');
let indexBtnBullet = document.querySelectorAll('.index_btn_bullet');

let currentSlideNumber = 0; //현재 슬라이드 번호
let slideLength = divSlide.length;
let slidePlayBtn = document.querySelector('.index_btn_play');

let slideAutoI = setInterval(slideMove, 5000);
let slideAutoState = true; //슬라이드 auto 기능 동작 여부 변수에 담음

//슬라이드 숨기기
function slideAllHide() {
  for (let i = 0; i < slideLength; i++) {
    //컨텐츠 모두 사라지게
    divSlide[i].style.display = 'none';

    //index 버튼 초기화
    indexBtnBullet[i].style =
      'width: 8px; height: 8px; border: none; background-color: rgba(255,255,255,0.4); border-radius: 4px;';
  }
}

//현재 슬라이드 보이기
function currentSlideShow() {
  // 해당 슬라이드만 보여지게
  divSlide[currentSlideNumber].style = 'animation:fade_in 1s forwards;';

  divSlide[currentSlideNumber].style.display = 'block';

  // 해당 index버튼 활성화
  indexBtnBullet[currentSlideNumber].style =
    'width: 12px; height: 12px; border: 2px solid rgb(255,255,255); background-color: rgba(255,255,255,0); border-radius: 6px;';
}

//hero slide 기능
function slideMoveIndex(target) {
  slideAllHide();

  currentSlideNumber = target;

  currentSlideShow();

  slideIntervalRestart(slideAutoI, slideMove);
}

// Slide Move
function slideMove(direction) {
  // 현재슬라이드값 증가 혹은 감소
  if (direction == 'next' || direction == undefined) {
    currentSlideNumber++;
  } else if (direction == 'prev') {
    currentSlideNumber--;
  }

  // 현재 슬라이드 수에 따른 적용
  if (currentSlideNumber > slideLength - 1) {
    currentSlideNumber = 0;
  } else if (currentSlideNumber < 0) {
    currentSlideNumber = slideLength - 1;
  }

  slideAllHide();

  currentSlideShow();

  slideIntervalRestart();
}

//인터벌 중지 후 다시 시작

// function slideIntervalRestart() {
//     clearInterval(slideAutoI);
//     slideAutoI = setInterval(slideMove, 5000);
// }

//매개변수를 활용해서 구현하는 법
function slideIntervalRestart(intervalName, functionName) {
  clearInterval(intervalName);
  intervalName = setInterval(functionName, 5000);
}

// Aoto slide 기능

function slideAutoPlay() {
  if (slideAutoState == true) {
    clearInterval(slideAutoI); //인터벌 중지

    slidePlayBtn.src = 'img/play_btn.svg';

    slideAutoState = false; //auto 기능 멈춤
  } else {
    slideAutoI = setInterval(slideMove, 5000);

    slidePlayBtn.src = 'img/stop_btn.svg';

    slideAutoState = true;
  }
}

// Design Slide 구현

let designDivSlide = document.querySelectorAll('.design_slide');
let designIndexBtnBullet = document.querySelectorAll(
  '.design_index_btn_bullet'
);

let designCurrentSlideNumber = 0; //현재 슬라이드 번호
let designNextSlideNumber = 0; //다음 슬라이드 번호

let designSlideLength = divSlide.length;
let designSlidePlayBtn = document.querySelector('.design_index_btn_play');

let designSlideAutoI = setInterval(slideMove, 5000);
let designSslideAutoState = true; //슬라이드 auto 기능 동작 여부 변수에 담음

document
  .querySelector('.design_move_prev')
  .addEventListener('click', function () {
    designSlideMove('prev');
  });

document
  .querySelector('.design_move_next')
  .addEventListener('click', function () {
    designSlideMove('next');
  });

// Slide Move
function designSlideMove(direction) {
  // 현재슬라이드값 증가 혹은 감소
  if (direction == 'next' || direction == undefined) {
    designNextSlideNumber = designCurrentSlideNumber + 1;
  } else if (direction == 'prev') {
    designNextSlideNumber = designCurrentSlideNumber - 1;
  }

  // 현재 슬라이드 수에 따른 적용
  if (designNextSlideNumber > designSlideLength - 1) {
    designNextSlideNumber = 0; //마지막 이미지에서 nextslide가 없으므로 0번째 슬라이드를 가져올 수 있도록함.
  } else if (designNextSlideNumber < 0) {
    designNextSlideNumber = designSlideLength - 1;
    //nextslide가 0보다 작아질 경우 마지막 이미지를 가져올 수 있도록 함.
  }

  //이미지 슬라이드 시 animation 효과
  if (direction == 'next' || direction == undefined) {
    designDivSlide[designCurrentSlideNumber].style =
      'animation: move_left_out 0.4s forwards';

    designDivSlide[designNextSlideNumber].style =
      'animation: move_left_in 0.4s forwards';

    designCurrentSlideNumber = designNextSlideNumber;
  } else if (direction == 'prev') {
    designDivSlide[designCurrentSlideNumber].style =
      'animation: move_right_out 0.4s forwards';

    designDivSlide[designNextSlideNumber].style =
      'animation: move_right_in 0.4s forwards';

    designCurrentSlideNumber = designNextSlideNumber;
  }
  // slideAllHide();

  // currentSlideShow();

  // slideIntervalRestart();
}
