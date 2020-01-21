let b = document.querySelector(".refresh__btn");
let counteur = 0;
var vid = document.querySelector(".myVideo");
b.addEventListener("click", function() {
  if (counteur < 1) {
    counteur++;
    vid.autoplay = false;
    vid.load();
    OtherVid.load();
    vid.style.filter = "invert(100%)";
    OtherVid.style.filter = "invert(100%)";

    console.log(counteur);
  } else {
    counteur--;
    vid.style.filter = "invert(0%)";
    OtherVid.style.filter = "invert(0%)";
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
let body = document.querySelector("body");
invert.addEventListener("click", function() {
  if (invert_actif < 1) {
    invert_actif++;
    OtherVid.style.filter = "invert(100%)";
    vid.style.filter = "invert(100%)";
    body.style.backgroundColor = "white";
  } else {
    invert_actif--;
    vid.style.filter = "invert(0%)";
    OtherVid.style.filter = "invert(0%)";
    vid.style.filter = "invert(0%)";
    body.style.backgroundColor = "black";
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

//Masque d'ecretage (video -> text on video)
let txtBtn = document.querySelector(".textTransform__btn");
let PromisedVideo = document.querySelector(".bottom");
let violonVideo = document.querySelector(".top");
let cptTxt = 0;
let maskTxt = document.querySelector(".txtMask");
let maskVid = document.querySelector(".vidMask");
let values = 1;

invert.style.display = "block";
nextVideo.style.display = "block";
b.style.display = "block";
if (values === 1) {
  maskTxt.style.display = "none";
  PromisedVideo.style.display = "none";
  maskVid.pause();
  OtherVid.play();
}
txtBtn.addEventListener("click", function() {
  if (cptTxt < 1) {
    cptTxt++;
    values++;
    maskVid.play();
    OtherVid.pause();
    vid.pause();
    OtherVid.style.display = "none";
    vid.style.display = "none";
    PromisedVideo.style.display = "block";
    violonVideo.style.display = "block";
    maskTxt.style.display = "block";
    invert.style.display = "none";
    nextVideo.style.display = "none";
    b.style.display = "none";
    console.log("00");
  } else {
    cptTxt--;
    maskVid.pause();
    PromisedVideo.style.display = "none";
    violonVideo.style.display = "none";
    OtherVid.style.display = "block";
    invert.style.display = "block";
    nextVideo.style.display = "block";
    b.style.display = "block";
    console.log("01");
  }
});
