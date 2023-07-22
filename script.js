let music = [
  {
    cover: "./msc/ROSIE-Somethingt.webp",
    name: "Rosie - Something I Hate",
    audio: new Audio("./msc/somethingHate.mp3"),
  },
  {
    cover: "./msc/beggin.jpg",
    name: "Maneskin beggin",
    audio: new Audio("./msc/ManeskinBeggin.mp3"),
  },
];

let musicName = document.querySelector("h1");
let musicCover = document.querySelector("#music-cover");
let musicTime = document.querySelector("#music-time");
let preBtn = document.querySelector("#pre-btn");
let playBtn = document.querySelector("#play-btn");
let nextBtn = document.querySelector("#next-btn");

let current = 0;
let audio = music[current].audio;
musicCover.src = music[current].cover;
musicName.innerText = music[current].name;

audio.addEventListener("canplay", () => {
  console.log(audio.duration);
  musicTime.max = audio.duration;
});

audio.addEventListener("timeupdate", () => {
  musicTime.value = audio.currentTime;
});

musicTime.addEventListener("input", () => {
  audio.currentTime = musicTime.value;
});
console.log(playBtn);
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    musicCover.computedStyleMap.animationPlayState = "runing";
    playBtn.classList.replace("fa-play", "fa-pause");
    console.log(playBtn.classList);
  } else {
    audio.pause();
    musicCover.computedStyleMap.animationPlayState = "pause";
    playBtn.classList.replace("fa-pause", "fa-play");
    console.log("pause");
  }
});

nextBtn.addEventListener("click", () => {
  changeMusic("next");
});
preBtn.addEventListener("click", () => {
  changeMusic("prev");
});

function changeMusic(state) {
  audio.pause();
  musicTime.value = 0;
  playBtn.classList.replace("fa-pause", "fa-play");
  musicCover.computedStyleMap.animationPlayState = "pause";
  audio.currentMusic = 0;
  if (state == "next") {
    if (current == music.length - 1) {
      current = 0;
    } else {
      current += 1;
    }
  }
  if (state == "prev") {
    if (current == 0) {
      current = music.length - 1;
    } else {
      current -= 1;
    }
  }
  audio = music[current].audio;
  musicCover.src = music[current].cover;
  musicName.innerText = music[current].name;
  audio.addEventListener("timeupdate", () => {
    musicTime.value = audio.currentTime;
  });
}
