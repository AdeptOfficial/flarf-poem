var fullWidth = window.innerWidth;
var fullHeight = window.innerHeight;
var txt = 'meow'; /* The text */

function moveMeow(){
    var elem = document.createElement("div2");
    elem.textContent = txt;
    elem.style.position = "absolute";
    elem.style.fontSize = "100px";
    elem.style.left = Math.round(Math.random() * fullWidth) + "px";
    elem.style.top = Math.round(Math.random() * fullHeight) + "px";
    document.body.appendChild(elem);
}
setInterval(moveMeow,100)
