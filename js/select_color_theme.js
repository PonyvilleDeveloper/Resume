function select_color_theme() {
    const selected = document.ThemeSelector.options[document.ThemeSelector.selectedIndex].text
    const theme = COLOR_THEMES[selected]

    let html = document.getElementsByTagName("html")[0].style
    for(let key in theme)
        if(key != "Name" && key != "isDark")
            html.setProperty(key, theme[key])
        else if(key == "isDark" && theme[key])
            console.log("Dark theme selected")
}