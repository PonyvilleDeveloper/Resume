function select_color_theme() {
    const options = document.getElementsByTagName('select')[0].options
    const theme = COLOR_THEMES[options[options.selectedIndex].text]

    let html = document.getElementsByTagName("html")[0].style
    for(let key in theme)
        if(key != "Name" && key != "isDark")
            html.setProperty(key, theme[key])
        else if(key == "isDark" && theme[key])
            console.log("Dark theme selected")
}