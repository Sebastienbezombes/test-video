const $body = document.querySelector("body");
const $refreshBtn = document.querySelector(".refreshBtn");
const $video = document.querySelector(".myVideo");
const $otherVideo = document.querySelector(".otherVid");
let refreshCpt = 0;
const vidMask = document.querySelector('.vidMask');

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
  if (txtCpt === 1) {
    console.log(txtCpt);
    posAbsolute($otherVideo, `${"none"}`, `${"none"}`);
    $video.muted = true;
    $otherVideo.muted = false;
    $containerVideo2.classList.remove('vidUnder');
    $containerVideo1.classList.remove('vidTop');
    $containerVideo2.classList.add('vidTop');
    $containerVideo1.classList.add('vidUnder');
    vidMask.className = 'display';
    $otherVideo.play();
    $video.play();
    txtCpt++;
  }
  if (txtCpt === 2) {
    console.log(txtCpt);
    posAbsolute($video, `${"none"}`, `${"none"}`);
    $video.muted = false;
    $otherVideo.muted = true;
    $containerVideo2.classList.remove('vidTop');
    $containerVideo1.classList.remove('vidUnder');
    $containerVideo2.classList.add('vidUnder');
    $containerVideo1.classList.add('vidTop');
    $otherVideo.play();
    $video.play();
    console.log(txtCpt);
    txtCpt--;
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
const $containerVideo1 = document.querySelector('.contentVideo1');
const $containerVideo2 = document.querySelector('.contentVideo2');
let txtCpt = 0;
$maskBtn.addEventListener("click", () => {
  if (txtCpt < 1) {
    txtCpt++;

    // Positionnement vidéo otherVideo et apparition de vidéo
    $otherVideo.style.display = "block";
    posAbsolute($otherVideo, `${"absolute"}`, `${"0px"}`);
    $video.style.display = "block";

    //load video
    $otherVideo.load();
    $otherVideo.muted = true;

    // Ajout du filtre
    $otherVideo.classList.add('vidMask');
    $video.classList.add('vidMask');

    // Ajout des 2 h1
    let h1 = document.createElement('h1');
    h1.textContent = "EDIT ME";
    $containerVideo2.append(h1);
    let h1Under = document.createElement('h1');
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


    $maskBtn.textContent = "Appliquer le masque";
    $otherVideo.play();
  }
});

const posAbsolute = (variable, position, value) => {
  variable.style.position = position;
  variable.style.top = value;
  variable.style.left = value;
}