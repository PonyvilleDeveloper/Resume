async function load_content() {
    for(let i = 0; true; i++) {
        let response = await fetch(`/Resume/htm/${i}.htm`)
        if(response.status != 200)
            break;
        let content = await response.text()
        const article = document.createElement("article")
        article.innerHTML = content
        const hr = document.createElement("hr")

        const main = document.getElementsByTagName("main")[0]
        main.appendChild(article)
        main.appendChild(hr)
    }
}

var COLOR_THEMES = {}
async function load_colorthemes() {
    for(let i = 0; true; i++) {
        let response = await fetch(`/Resume/json/${i}.json`)
        if(response.status != 200)
            break;
        response.json().then(theme => 
            COLOR_THEMES[theme.Name.toString()] = theme
        )

        let select = document.getElementById("color-theme-select")
        let option = document.createElement("option")
        option.innerText = theme.Name.toString()
        option.value = theme.Name.toString()
        select.appendChild(option)
    }
}

async function load() {
    await load_content()
    await load_colorthemes()
}

document.addEventListener("DOMContentLoaded", load)