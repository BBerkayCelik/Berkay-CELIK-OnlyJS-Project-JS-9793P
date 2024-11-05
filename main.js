const clickCounter = document.getElementById("click-counter");
clickCounter.addEventListener("click", function () {
  const counter = document.getElementById("counter");
  let counterNumber = Number(counter.innerHTML);

  counterNumber++;
  counter.innerHTML = counterNumber;
});



const samSmithAudio = document.getElementById("samSmithAudio");
const samSmithIcon = document.getElementById("samSmithIcon");

samSmithIcon.addEventListener("click", function () {
    if (samSmithAudio.paused) {
        samSmithAudio.play()
        samSmithIcon.className = "fa-solid fa-pause"
    } else {
        samSmithAudio.pause()
        samSmithIcon.className = "fa-solid fa-music"
    }
})

const palomaFaithAudio = document.getElementById("palomaFaithAudio");
const palomaFaithIcon = document.getElementById("palomaFaithIcon");

palomaFaithIcon.addEventListener("click", function () {
    if (palomaFaithAudio.paused) {
        palomaFaithAudio.play()
        palomaFaithIcon.className = "fa-solid fa-pause"
    } else {
        palomaFaithAudio.pause()
        palomaFaithIcon.className = "fa-solid fa-microphone"
    }
})
