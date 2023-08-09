const searchEl = document.querySelector(".search");
const searchInputEl = document.querySelector("input");

searchEl.addEventListener("click", () => {
    searchInputEl.focus(); // 클릭 시 focus
});

searchInputEl.addEventListener("focus", () => {
    searchEl.classList.add('focused'); // 속성 추가
    searchInputEl.setAttribute("placeholder","통합검색");
});

searchInputEl.addEventListener("blur", () => {
    searchEl.classList.remove('focused'); // 속성 삭제
    searchInputEl.setAttribute("placeholder","");
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
    if(window.scrollY > 500){
        // gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .6, {opacity:0, display:"none"});
    }else{
        gsap.to(badgeEl, .6, {opacity:1, display:"block"});
    }
}, 300));

/* Visual Image를 순차적으로 나타나게 하는 기능 */
const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach((el, cnt) =>{
    gsap.to(el, 1, {opacity:1, delay:(cnt+1)*.7}); //delay : 시간 차를 적용해 각각의 옵션이 따로따로 진행
});

/* Swiper */

new Swiper(".notice-line .swiper", {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay:true
});

new Swiper(".promotion .swiper", {
    direction: 'horizontal',
    slidesPerView: 3,
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {delay: 5000}, //autoplay 시간 간격 설정
    pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
});
