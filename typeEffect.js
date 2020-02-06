
var i = 0;
var txt = 'WHAT IS HAPPENING?'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("boom").innerHTML += txt.charAt(i);
    i++;
    var txt = setTimeout(typeWriter, speed);
  }
}
