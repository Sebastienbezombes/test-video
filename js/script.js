let b = document.querySelector(".refresh__btn");
let counteur = 0;
var vid = document.querySelector(".myVideo");
b.addEventListener("click", function() {
  if (counteur < 1) {
    counteur++;
    vid.autoplay = false;
    vid.load();
    OtherVid.load();
    vid.style.filter = "invert(0%)";
    OtherVid.style.filter = "invert(0%)";
    console.log(counteur);
  } else {
    counteur--;
    vid.style.filter = "invert(0%)";
    vid.autoplay = true;
    vid.load();
    OtherVid.load();
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
    OtherVid.style.filter = "invert(100%)";
  } else {
    invert_actif--;
    vid.style.filter = "invert(0%)";
    OtherVid.style.filter = "invert(0%)";
  }
});

//changer video
let nextVideo = document.querySelector(".changeVid__btn");
let OtherVid = document.querySelector(".otherVid");
let cptVideo = 0;

nextVideo.addEventListener("click", function() {
  if (cptVideo < 1) {
    OtherVid.pause();
    vid.style.display = "block";
    OtherVid.style.display = "none";
    cptVideo++;
    vid.style.zIndex = cptVideo;
    vid.play();
  } else {
    vid.pause();
    vid.style.display = "none";
    OtherVid.style.display = "block";
    cptVideo--;
    vid.style.zIndex = 0;
    OtherVid.style.zIndex = cptVideo;
    OtherVid.play();
  }
});

//Masque d'ecretage (video -> texte)
let txtBtn = document.querySelector(".textTransform__btn");
let EditText = document.querySelector(".text__transform");
let cptTxt = 0;
let oldVidGif = document.querySelector(".promisedGif");

txtBtn.addEventListener("click", function() {
  if (cptTxt < 1) {
    cptTxt++;
    document.oldVidGif.style.opacity = "100%";

    console.log("test1");
  } else {
    cptTxt--;
    document.oldVidGif.style.opacity = "0%";

    console.log("test2");
  }
});
