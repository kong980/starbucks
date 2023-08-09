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


/* gsap cdn 검색*/

window.addEventListener("scroll", _.throttle(() => {
    if(window.scrollY > 500){
        // gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .6, {opacity:0, display:"none"});
    }else{
        gsap.to(badgeEl, .6, {opacity:1, display:"block"});
    }
}, 300));