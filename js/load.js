async function load() {
    var location = document.location.href
    for(var i = 0; true; i++) {
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

document.addEventListener("DOMContentLoaded", load)