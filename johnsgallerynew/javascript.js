//comment section!
/* console.log("Vida Boxeo"); */
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
function myFunction(x) {
  x.classList.toggle("change");
}

