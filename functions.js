function ChangeCSS(style) {
    var styleElement = document.getElementById("id_style");
    styleElement.href = style;
    console.log("Setting style to ", style);
    localStorage.setItem("currentStyle", styleElement.href);
    localStorage.setItem("styleChanged", true);
}

window.onload = function() {
    if(localStorage.getItem("styleChanged"))
    {
        ChangeCSS(localStorage.getItem("currentStyle"));
    }
    else
    {
        ChangeCSS("style1.css");
    }
}