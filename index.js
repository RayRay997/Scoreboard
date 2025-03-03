let homeScore = document.getElementById("score-Home")
let guestScore = document.getElementById("score-Guest")
let currentscoreH = 0
let currentscoreG = 0

function homePlus1() {
    currentscoreH += 1
    homeScore.textContent = currentscoreH
}

function homePlus2() {
    currentscoreH += 2
    homeScore.textContent = currentscoreH
}

function homePlus3() {
    currentscoreH += 3
    homeScore.textContent = currentscoreH
}

function guestPlus1() {
    currentscoreG += 1
    guestScore.textContent = currentscoreG
    
}

function guestPlus2() {
    currentscoreG += 2
    guestScore.textContent = currentscoreG
}

function guestPlus3() {
    currentscoreG += 3
    guestScore.textContent = currentscoreG
}