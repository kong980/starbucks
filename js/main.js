const searchEl = document.querySelector(".search");
const searchInputEl = document.querySelector("input");

searchEl.addEventListener("click", () => {
    searchInputEl.focus(); // 클릭 시 focus
});

searchInputEl.addEventListener("focus", () => {
    searchEl.classList.add('focused'); // 속성 추가
    searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", () => {
    searchEl.classList.remove('focused'); // 속성 삭제
    searchInputEl.setAttribute("placeholder", "");
});


const badgeEl = document.querySelector('header .badges');

/* lodash cdn 검색 : 너무 자주 실행되는 함수 제어 */
// window.addEventListener("scroll", _.throttle(() => {
//     // console.log(window.scrollY);
//     if(window.scrollY > 500){
//         badgeEl.style.display = "none";
//     }else{
//         badgeEl.style.display= "block";
//     }
// }, 300)); //(함수, 실행 시간 주기)


/* gsap cdn 검색 */

window.addEventListener("scroll", _.throttle(() => {
    if (window.scrollY > 500) {
        // gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .6, { opacity: 0, display: "none" });
    } else {
        gsap.to(badgeEl, .6, { opacity: 1, display: "block" });
    }
}, 300));

/* Visual Image를 순차적으로 나타나게 하는 기능 */
const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach((el, cnt) => {
    gsap.to(el, 1, { opacity: 1, delay: (cnt + 1) * .7 }); //delay : 시간 차를 적용해 각각의 옵션이 따로따로 진행
});

/* Swiper */

new Swiper(".notice-line .swiper-container", {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay: true
});

new Swiper(".promotion .swiper-container", {
    direction: 'horizontal',
    slidesPerView: 3,
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: { delay: 5000 }, //autoplay 시간 간격 설정
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

new Swiper(".awards .swiper-container", {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 5,
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
    }
});



// Promotion 토글

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", () => {
    if (isHidePromotion) {
        promotionEl.classList.remove("hide");
        isHidePromotion = false;
    } else {
        promotionEl.classList.add("hide");
        isHidePromotion = true;
    }
});


// 떠 다니는(부유하는) 요소를 만드는 함수

function rand(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
    gsap.to(selector, rand(1.5, 2.5), {
        y: rand(10, size),
        repeat: -1,
        yoyo: true,
        delay: rand(0, delay),
        ease: Power1.easeInOut
    })
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", .5, 15);
floatingObject(".floating3", 1.5, 20);


/* SEASON PRODUCT */
const spyEls = document.querySelectorAll("section.scroll-spy");

spyEls.forEach(function (spyEl) { //new ScrollMagic.Scene().setClassToggle().addTo()
    new ScrollMagic.Scene({ //감시할 장면(Scene) 추가
        triggerElement: spyEl, //보여짐 여부를 감시할 요소 지정
        triggerHook: .8 //화면의 80% 지점에서 보여짐 여부 감시
    })
        .setClassToggle(spyEl, 'show') //요소가 화면에 보이면 show 클래스 추가
        .addTo(new ScrollMagic.Controller()); //컨트롤러에 장면을 할당(필수!!)
})

//날짜 계산

const year = document.querySelector(".this-year");
year.textContent = new Date().getFullYear();

// 맨위로 버튼 보이기
const toTopEl = document.getElementById("to-top");
window.addEventListener("scroll", _.throttle(function () {
    if (window.scrollY === 0) {
        gsap.to(toTopEl, .2, {
            x: 100
        });
    } else {
        gsap.to(toTopEl, .2, {
            x: 0
        });

    };
}))


// 맨위로 버튼 클릭

toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});

// 상단에서 맨위로 버튼 숨기기
