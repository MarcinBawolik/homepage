{
    const welcome = () => {
        console.log("Witam wszystkich")
    }


    const toggleBackgroundColor = () => {
        const themeNameElement = document.querySelector(".js-themeName")
        const body = document.querySelector(".body")
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            themeNameElement.innerText = "jasny";
        } else {
            themeNameElement.innerText = "ciemny";
        }
    }
    const init = () => {
        const button = document.querySelector(".js-button")
        button.addEventListener("click", toggleBackgroundColor)

        welcome();

    }
    init()

    const headerRemove = () => {
        const Section__header = document.querySelector(".js-sectionHeader")
        Section__header.remove();
    }
    const init2 = () => {
        const Section__button1 = document.querySelector(".js-Section__button-1")
        Section__button1.addEventListener("click", headerRemove)
    }
    init2()
    const headerReplace = () => {
        const section__button2 = document.querySelector(".js--removeHeaderButton")
        section__button2.replaceWith("super zabawa, pozdrawiam :)")
    }
    const init3 = () => {
        const section__button2 = document.querySelector(".js--removeHeaderButton")
        section__button2.addEventListener("click", headerReplace)

    }
    init3()
}