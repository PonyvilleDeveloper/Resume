function select_color_theme() {
    const options = document.getElementsByTagName('select')[0].options
    const theme = COLOR_THEMES[options[options.selectedIndex].text]

    let html = document.getElementsByTagName("html")[0].style
    for(let key in theme)
        if(key != "Name" && key != "isDark")
            html.setProperty(key, theme[key])
        else if(key == "isDark" && theme[key])
            document.getElementById("deco").src = (theme[key]) ? "https://cdnstatic.rg.ru/uploads/images/136/56/12/Depositphotos_26744613_m-2015.jpg" : "https://i.pinimg.com/736x/dc/8d/3d/dc8d3d5921d989a7964455f2547adab1.jpg";
}