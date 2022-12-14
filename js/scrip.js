console.log("Witam wszystkich")



let Section__button1 = document.querySelector(".js-Section__button-1")
let Section__header = document.querySelector(".js-Section__header")

Section__button1.addEventListener("click", () => {
    Section__header.remove();
})
let section__button2 = document.querySelector(".js--button-headerremove")

section__button2.addEventListener("click", () => {
    section__button2.replaceWith("super zabawa, pozdrawiam :)")
})
let header__button = document.querySelector(".js-header__button");
let header__header = document.querySelector(".js-header__header")

header__button.addEventListener("click", () => {
    header__header.classList.toggle("dark")
})
let button = document.querySelector(".js-button")
let Change = document.querySelector(".Change")
let dark = document.querySelector(".dark")
let body = document.querySelector(".body")

button.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        Change.innerText = "jasny";
    } else {
        Change.innerText = "ciemny";
    }
})

