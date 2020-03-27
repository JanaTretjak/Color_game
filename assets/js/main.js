let bg = document.getElementsByTagName("button")
let color = document.getElementById("color")
let result = document.getElementById("result")
let reset = document.getElementById("reset")

function random() {
    return Math.ceil(Math.random() * 255).toFixed()
}

for (let i = 0; i < bg.length; i++) {

    bg[i].style.background = `rgb(${random()}, ${random()}, ${random()})`

    let random1 = Math.floor(Math.random() * 5).toFixed()
    color.innerHTML = `${bg[random1].style.background}`

    bg[i].addEventListener("click", (e) => {

        if (e.target.style.background == color.innerHTML) {
            result.innerHTML = "Das stimmt! Super! Spiel es nochmal :)"
            result.style.color = "rgb(187, 9, 9)"
            result.style.fontSize = "5vh"
            document.querySelector("h4").style.display = "block"
        } else {
            result.innerHTML = "Das stimmt leider nicht. Versuche es nochmal."
        }
    })
}

reset.addEventListener("click", () => {
    location.reload()
})
