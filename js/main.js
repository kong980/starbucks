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
