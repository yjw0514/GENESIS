// Hero Slide 구현


let divSlide = document.querySelectorAll('.slide'); 

let indexBtnBullet = document.querySelectorAll('.index_btn_bullet');

let currentSlideNumber = 0; //현재 슬라이드 번호


function slideInit() {
    for (let i=0; i < divSlide.length; i++ ) {

        //컨텐츠 모두 사라지게
        divSlide[i].style.display= "none";

        //index 버튼 초기화
        indexBtnBullet[i].style = "width: 8px; height: 8px; border: none; background-color: rgba(255,255,255,0.4); border-radius: 4px;";
    }
}

function heroSlide(target) {

    clearInterval(slideAutoI);

    slideInit();

    // 해당 슬라이드만 보여지게
    divSlide[target].style = "animation: fade_in 1s forwards";

    divSlide[target].style.display = "block";

    

    // 해당 index버튼 활성화
    indexBtnBullet[target].style = "width: 12px; height: 12px; border: 2px solid rgb(255,255,255); background-color: rgba(255,255,255,0); border-radius: 6px;"

    // currentSlideNumber = target;

    slideAutoI = setInterval(slideMoveNext, 3000);
}

// Slide Move Next 

function slideMoveNext() {

    clearInterval(slideAutoI);

    currentSlideNumber++;
    if (currentSlideNumber > divSlide.length - 1) {
        currentSlideNumber = 0;
    }

    slideInit();

    // 해당 슬라이드만 보여지게
    divSlide[currentSlideNumber].style = "animation:fade_in 1s forwards;";

    divSlide[currentSlideNumber].style.display = "block";

    // 해당 index버튼 활성화
    indexBtnBullet[currentSlideNumber].style = "width: 12px; height: 12px; border: 2px solid rgb(255,255,255); background-color: rgba(255,255,255,0); border-radius: 6px;";

    slideAutoI = setInterval(slideMoveNext, 3000);
}

function slideMovePrev() {

    clearInterval(slideAutoI);

    currentSlideNumber--;
    if (currentSlideNumber < 0 ) {
        currentSlideNumber = divSlide.length - 1;
    }

    slideInit();

    // 해당 슬라이드만 보여지게
    divSlide[currentSlideNumber].style = "animation:fade_in 1s forwards;";

    divSlide[currentSlideNumber].style.display = "block";

    // 해당 index버튼 활성화
    indexBtnBullet[currentSlideNumber].style = "width: 12px; height: 12px; border: 2px solid rgb(255,255,255); background-color: rgba(255,255,255,0); border-radius: 6px;";

    slideAutoI = setInterval(slideMoveNext, 3000);
}



let slideAutoI = setInterval(slideMoveNext, 3000);

let slideAutoState = true; //슬라이드 auto 기능 동작 여부 변수에 담음

function slideAutoPlay() {

    if (slideAutoState == true) {

        clearInterval(slideAutoI); //인터벌 중지

        document.querySelector('.index_btn_play').src = "img/play_btn.svg";

        slideAutoState = false; //auto 기능 멈춤

    } else {
        
        slideAutoI = setInterval(slideMoveNext, 3000);

        document.querySelector('.index_btn_play').src = "img/stop_btn.svg";

        slideAutoState = true;
    }
    
}

