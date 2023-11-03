const playerplay = document.querySelectorAll(".play");
const bar = document.querySelectorAll(".progressbar");
const timeCurrent = document.querySelectorAll(".currentTime");
const timeTotal = document.querySelectorAll(".totalTime");

let artist = "";
let track = "";
let song = 0;
let updateTimer;

const playerApi = `https://api.deezer.com/search?q=track:` + track;

let track_list = [];

function songLoading(song) {
    clearInterval(updateTimer);
    resetValues();

    updateTimer = setInterval(update, 1000);
}

function resetTimer() {
    timeCurrent.textContent = "0:00";
    timeTotal.textContent = "0:00";
    bar.value = 0;
}

function playSong(playerplay) {
    const playpause = playerplay.querySelector("i");

    if (playpause.classList.contains("fa-play")) {
        playpause.classList.remove("fa-play");
        playpause.classList.add("fa-pause");
        // Add your play functionality here
    } else {
        playpause.classList.remove("fa-pause");
        playpause.classList.add("fa-play");
        // Add your pause functionality here
    }
}