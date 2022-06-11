const moles = document.getElementsByClassName('mole');
const score = document.getElementById('score');
const timer = document.getElementById('timer');
let randomMole = moles[getRandomInt(moles.length)];
setUpMole(randomMole);
function setUpMole(mole) {
    mole.style.display = "block";
    let timeLeft = 3000 - parseInt(score.innerHTML) * 3;
    let timeOut = setTimeout(function () {
        alert("Game Over");
        location.reload();
    }, timeLeft);
    let timeLeftCounter = setInterval(function () {
        timeLeft -= 10;
        timer.innerHTML = String(Math.max(timeLeft, 0));
    }, 10);
    mole.onclick = function () {
        mole.style.display = 'none';
        mole = moles[getRandomInt(moles.length)];
        mole.style.display = 'block';
        clearTimeout(timeOut);
        clearInterval(timeLeftCounter);
        score.innerHTML = String(parseInt(score.innerHTML) + 1);
        setUpMole(mole);
    };
}
//adds zeros to number
function padLeadingZeros(num, size) {
    let s = num + "";
    while (s.length < size)
        s = "0" + s;
    return s;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//# sourceMappingURL=script.js.map