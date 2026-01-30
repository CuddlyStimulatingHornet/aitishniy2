const radioImg = document.querySelector(".radio-img");
const radioSelect = document.querySelector(".radio-select");
const btn = document.querySelector(".play-btn");

const audio = document.createElement("audio");

let isPlaying = true;

const radioStations = [
  {
    name: "Lofi",
    url: "http://audio.gendercriminals.gay/listen/lo-fi_halloween_and_chill/radio-browser",
    img: "images/lofi-cover.jpg",
  },
  {
    name: "Dance",
    url: "https://uk6.internet-radio.com/proxy/4themusic?mp=/live",
    img: "images/dance-cover.jpg",
  },
  {
    name: "Techno",
    url: "http://s1.radioparty.pl:8000/stream",
    img: "images/techno-cover.jpg",
  },
  {
    name: "40s",
    url: "https://uk3.internet-radio.com/proxy/1940sradio?mp=/live",
    img: "images/40s-cover.jpg",
  },
  {
    name: "Rock",
    url: "https://uk1.internet-radio.com/proxy/bloodstream/live",
    img: "images/rock-cover.jpg",
  },
  {
    name: "Kpop",
    url: "http://163.172.77.142:8724/stream/1/",
    img: "images/kpop-cover.jpg",
  },
  {
    name: "Pop",
    url: "https://poploungecafe.stream.laut.fm/poploungecafe",
    img: "images/pop-cover.jpg",
  },
];

function updateRadio() {
  const currentRadio = radioStations.find(
    (radio) => radio.name === radioSelect.value,
  );

  audio.src = currentRadio.url;
  radioImg.src = currentRadio.img;
}

radioSelect.addEventListener("change", (e) => {
  updateRadio();
  audio.play();
});

btn.addEventListener("click", () => {
  const icon = document.querySelector(".fa-solid");
  if (isPlaying) {
    icon.classList.remove("fa-circle-play");
    icon.classList.add("fa-circle-pause");
    audio.play();
  } else {
    icon.classList.remove("fa-circle-pause");
    icon.classList.add("fa-circle-play");
    audio.pause();
  }

  isPlaying = !isPlaying;
});

updateRadio();
