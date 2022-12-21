{
    const welcome = () => {
        console.log("Witam wszystkich")
    }
    welcome();

    const togleBackgroundColor = () => {
        const Change = document.querySelector(".Change")
        const dark = document.querySelector(".dark")
        const body = document.querySelector(".body")
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            Change.innerText = "jasny";
        } else {
            Change.innerText = "ciemny";
        }
    }
    const init = () => {
        const button = document.querySelector(".js-button")

        button.addEventListener("click", togleBackgroundColor)

    }
    init()

    const headerRemove = () => {
        const Section__header = document.querySelector(".js-Section__header")
        Section__header.remove();
    }
    const init2 = () => {
        const Section__button1 = document.querySelector(".js-Section__button-1")
        Section__button1.addEventListener("click", headerRemove)
    }
    init2()
const headerReplace =  () => {
    const section__button2 = document.querySelector(".js--button-headerremove")
    section__button2.replaceWith("super zabawa, pozdrawiam :)")
}
const init3 = () => {
    const section__button2 = document.querySelector(".js--button-headerremove")
    section__button2.addEventListener("click", headerReplace)

}
init3()
}