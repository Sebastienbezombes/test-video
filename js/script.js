let b = document.querySelector(".refresh__btn");
let counteur = 0;
var vid = document.querySelector(".myVideo");
b.addEventListener("click", function() {
  if (counteur < 1) {
    counteur++;
    vid.autoplay = false;
    vid.load();
    console.log(counteur);
  } else {
    counteur--;
    vid.style.filter = "invert(0%)";
    vid.autoplay = true;
    vid.load();
    console.log(counteur);
  }
});

// inverser les couleurs de la video
let invert = document.querySelector(".invert__btn");
let invert_actif = 0;
var vid = document.querySelector(".myVideo");
invert.addEventListener("click", function() {
  if (invert_actif < 1) {
    invert_actif++;
    vid.style.filter = "invert(100%)";
  } else {
    invert_actif--;
    vid.style.filter = "invert(0%)";
  }
});

//changer video random
let nextVideo = document.querySelector(".changeVid__btn");
let OtherMusic = document.querySelector(".promised__mp3");
let OtherVid = document.querySelector(".otherVid");
let cptVideo = 0;

nextVideo.addEventListener("click", function() {
  if (cptVideo < 1) {
    OtherVid.pause();
    cptVideo++;
    vid.style.zIndex = cptVideo;
    vid.play();
  } else {
    vid.pause();
    cptVideo--;
    vid.style.zIndex = 0;
    OtherVid.style.zIndex = cptVideo;
    OtherVid.play();
  }
});
