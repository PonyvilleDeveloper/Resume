async function load_content() {
    for(let i = 0; true; i++) {
        let response = await fetch(`/Resume/htm/${i}.htm`)
        if(response.status != 200)
            break;
        let content = await response.text()
        const article = document.createElement("article")
        article.innerHTML = content
        const main = document.getElementsByTagName("main")[0]
        main.appendChild(article)
    }
}

var COLOR_THEMES = {}
async function load_colorthemes() {
    for(let i = 0; true; i++) {
        let response = await fetch(`Resume/json/${i}.json`)
        if(response.status != 200)
            break;
        let theme = await JSON.parse(response.json())
        COLOR_THEMES[theme.Name.toString()] = theme

        let select = document.getElementById("color-theme-select")
        let option = document.createElement("option")
        option.innerText = theme.Name.toString()
        option.value = i
        select.appendChild(option)
    }
}

async function load() {
    await load_content()
}

document.addEventListener("DOMContentLoaded", load)