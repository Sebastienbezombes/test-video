const $body = document.querySelector("body");
const $refreshBtn = document.querySelector(".refreshBtn");
const $video = document.querySelector(".myVideo");
const $otherVideo = document.querySelector(".otherVid");
let refreshCpt = 0;
const vidMask = document.querySelector('.vidMask');
const $containerVideo1 = document.querySelector('.contentVideo1');
const $containerVideo2 = document.querySelector('.contentVideo2');
let h1 = document.createElement('h1');
let h1Under = document.createElement('h1');
let changeCpt = 0;

// Raffraichir la vidéo
$refreshBtn.addEventListener('click', () => refresh($video, $otherVideo))
let refresh = (video1, video2) => {
  video1.load();
  video2.load();
  video1.classList.remove('invert');
  video2.classList.remove('invert');
  video2.play();
}

// inverser les couleurs de la video
const $invertBtn = document.querySelector(".invertBtn");
$invertBtn.addEventListener("click", () => invertColor($video, $otherVideo));
let invertColor = (video1, video2) => {
  video1.classList.toggle('invert');
  video2.classList.toggle('invert');
}

//changer video
const $changeVideoBtn = document.querySelector(".changeVidBtn");
let videoCpt = 0;
$changeVideoBtn.addEventListener("click", () => {
  if (changeCpt === 1) {
    changeCpt--
    $changeVideoBtn.style.display = "none"
    console.log(txtCpt);
    posAbsolute($otherVideo, `${"none"}`, `${"none"}`);
    posAbsolute($video, `${"absolute"}`, `${"0px"}`);
    $video.muted = true;
    $otherVideo.muted = false;
    $otherVideo.classList.add('vidMask');
    $video.classList.add('vidMask');
    $containerVideo2.classList.remove('vidUnder');
    $containerVideo1.classList.remove('vidTop');
    $containerVideo2.classList.add('vidTop');
    $containerVideo1.classList.add('vidUnder');
    vidMask.classList.add('display');
    $otherVideo.play();
    $video.play();
    console.log($changeVideoBtn, "change 1")
  }

  if (videoCpt < 1 && txtCpt === 0) {
    videoCpt++;
    videoPlayPause($video, $otherVideo);
    displayVideo($video, $otherVideo);
  } else {
    videoCpt--;
    videoPlayPause($otherVideo, $video);
    displayVideo($otherVideo, $video);
  }
});

videoPlayPause = (play, pause) => {
  play.play();
  pause.pause();
}

displayVideo = (block, none) => {
  block.style.display = "block";
  none.style.display = "none";
}

//Masque d'ecretage (video -> text on video)
const $maskBtn = document.querySelector(".maskBtn");
let txtCpt = 0;
$maskBtn.addEventListener("click", () => {
  if (txtCpt < 1) {
    txtCpt++;
    changeCpt++;
    console.log(txtCpt, 'txtcpt dans masque')

    // Positionnement vidéo otherVideo et apparition de vidéo
    $otherVideo.style.display = "block";
    $otherVideo.style.position = "absolute";
    $otherVideo.style.top = "0px";
    $otherVideo.style.left = "0px";
    $video.style.display = "block";

    //load video
    $otherVideo.load();
    $otherVideo.muted = true;

    // Ajout du filtre
    $otherVideo.classList.add('vidMask');
    $video.classList.add('vidMask');

    // Ajout des 2 h1
    h1.textContent = "EDIT ME";
    $containerVideo2.append(h1);
    h1Under.textContent = "EDIT ME";
    $containerVideo1.append(h1Under);

    // Styles h1
    h1.classList.add('txtMask');
    h1Under.classList.add('txtMask');

    // Ajout class container videos
    $containerVideo2.classList.add('vidUnder');
    $containerVideo1.classList.add('vidTop');

    //play des 2 videos
    $otherVideo.play();
    $video.play();

    $maskBtn.textContent = "Enlever le masque";
  } else {
    txtCpt = 0;
    $otherVideo.muted = false;

    $otherVideo.style.display = "block";
    $video.style.display = "none";

    //load video
    $otherVideo.load();
    $otherVideo.muted = false;

    // Ajout du filtre
    $otherVideo.classList.remove('vidMask');
    $video.classList.remove('vidMask');

    h1.classList.remove('txtMask')
    h1Under.classList.remove('txtMask')

    $containerVideo2.classList.remove('vidUnder');
    $containerVideo1.classList.remove('vidTop');

    $maskBtn.textContent = "Appliquer le masque";
    $otherVideo.play();
  }
});

const posAbsolute = (variable, position, value) => {
  variable.style.position = position;
  variable.style.top = value;
  variable.style.left = value;
}