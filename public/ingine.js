let pathname = location.pathname;
let pathA = document.querySelector(`[href = '${pathname}' ]`);
let titles = document.querySelectorAll(".title");
let cardsColor = [
    'rgb(247, 115, 68)' //orange
    , 'rgb(63, 180, 243)' //sayan
    , 'rgb(247, 89, 105)' //pink
    , 'rgb(101, 213, 138)' //green
    , 'rgb(144, 20, 233)' //purple
    , 'rgb(255, 210, 98)' //yellow
]
pathA.style.color = "rgba(255, 255, 255, 1)";

for (let i = 0; i < titles.length; i++) {
    const title = titles[i];
    title.parentElement.parentElement.parentElement.style.backgroundColor = cardsColor[i];
    title.parentElement.parentElement.parentElement.style.backgroundImage = `url(./images/icon-${title.innerText.toLowerCase()}.svg)`;
    if (titles[i].innerText == "Self Care") {
        title.parentElement.parentElement.parentElement.style.backgroundImage = "url(./images/icon-self-care.svg)";
    }
}