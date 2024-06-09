let instrumentBox = document.querySelector("#musicSystem");
let div;
function outlook() {
    let name = ["Crash", "Kick", "Snare", "Tom"]
    let imageLink = ["./images/crash.png", "./images/kick.png", "./images/snare.png", "./images/tom.png"]
    for (let i = 0; i < 4; i++) {
        div = document.createElement("div");
        div.classList.add("hello")
        instrumentBox.appendChild(div)
        div.innerText = name[i];
        div.style.backgroundImage = `URL(${imageLink[i]})`;
        div.setAttribute("id", `kit${i}`)


        document.querySelector(`#kit${i}`).addEventListener("click", function () {
            document.querySelector(`#music${i}`).play();
        })
    }
}
outlook();
// Audio Portion

function audioTamJham() {

    let audioLink = ["./musics/crash.mp3", "./musics/kick.mp3", "./musics/snare.mp3", "./musics/tom.mp3"]
    let audio;
    for (let j = 0; j < 4; j++) {
        audio = document.createElement("audio");

        instrumentBox.appendChild(audio)

        // audio.setAttribute("controls", "true")
        audio.setAttribute("src", `${audioLink[j]}`)
        audio.setAttribute("id", `music${[j]}`)

    }
    let header = document.querySelector("header");
    header.addEventListener("click", function () {
        document.getElementById('music2').play();
    });
}

audioTamJham();


//Click


window.addEventListener("keydown", function (event) {

    for (let i = 0; i < 4; i++) {

        let vr = this.document.querySelector(`#kit${i}`).innerText.slice(0, 1);

        let a = vr.toLowerCase();
        console.log();
        if (event.key === a) {
            document.querySelector(`#music${i}`).play();
            document.querySelector(`#kit${i}`).style.transform = "scale(0.8)"
            document.querySelector(`#kit${i}`).style.color = "red"


            break;
        }
        else{
            document.querySelector(`#kit${i}`).style.transform = "scale(1)"
            document.querySelector(`#kit${i}`).style.color = "black"

        }

    }
})


// Loader

let loader = document.querySelector("#loader");
window.addEventListener("DOMContentLoaded", function () {
    loader.style.display = "none";

})






