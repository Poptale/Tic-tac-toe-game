//cursor code starts here
const dot = document.querySelector("[data-cursor-dot]");
const outline = document.querySelector("[data-cursor-outline]");
window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    dot.style.left = `${posX}px`;
    dot.style.top = `${posY}px`;
    outline.animate({
        top: `${posY}px`,
        left: `${posX}px`
    }, {duration: 200, fill: "forwards"});
});

//real code starts here
// let bgMusic = new Audio ("bgMusic.mp3");
// bgMusic.loop = true;
// window.addEventListener("load", () => {
//     bgMusic.play();
// });

let clickAudio = new Audio("audio1.mp4");

let buttons = document.querySelectorAll(".boxes");
let resetBtn = document.querySelector(".button");
let showWinner = document.querySelector(".showWinner");
let newGame = document.querySelector("#gameButton");
let newdisplay = document.querySelector(".newGame");
let display = document.querySelector(".game-container");
let turnO = true;

newGame.addEventListener("click", () => {
    newdisplay.style.display = "none";
    display.style.display = "grid";
    buttons.forEach((box) => {
        box.innerHTML = "";
        box.disabled = false;
    });
})

resetBtn.addEventListener("click", 
    function reset() {
        resetBtn.addEventListener("click", () => {
            bgMusic.play();
            buttons.forEach((box) => {
                box.innerHTML = "";
                box.disabled = false;
            })
        });
    }
);

buttons.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO === true) {
            box.innerHTML = "O";
            turnO = false;
            clickAudio.play();
        } else {
            box.innerHTML = "X";
            turnO = true;
            clickAudio.play();
        }
        box.disabled = true;
        checkwinner();
    });
});

let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let checkwinner = () => {
    for( let pattern of winningPattern) {
        let value1 = buttons[pattern[0]].innerText;
        let value2 = buttons[pattern[1]].innerText;
        let value3 = buttons[pattern[2]].innerText;

        if ( value1 != "" && value2 != "" && value3 != "" ){
            if( value1 === value2 && value2 === value3 ){
                newdisplay.style.display = "flex";
                display.style.display = "none";
                showWinner.innerHTML = "Winner = " + value1;
            };
        };
    };
};