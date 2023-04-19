
const playboard = document.querySelector('.playboard')
let currentBarPosition = [100, 200];
let playboardWidth = 600;
let playboardHeight = 740;
let barWidth = 30;
let barHeight = 30;
//----------characteristics
let blockWidth = 200;
let blockHeight = 30;
let ballDiameter = 30;
let xDirection = 2;
let yDirection = 2;

//-------------------------------------
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const restartBtn = document.querySelector('#restart-btn');
const timeOut = document.querySelector('.timeOut');
//-----------------------

const bar = document.createElement('div')
bar.classList.add('playing-bar')
playboard.appendChild(bar)
moveBar()

//--------
const score = document.querySelector(".score")




//---- adding bar to the playboard
function moveBar() {
    bar.style.left = currentBarPosition[0] + "px"
    bar.style.bottom = currentBarPosition[1] + "px"
}

//---------------------------------------------------
class Block {
    constructor(x, y) {
        this.bottomLeft = [x, y]
        this.bottomRight = [x + blockWidth, y]
        this.topLeft = [x, y + blockHeight]
        this.topRight = [x + blockWidth, y + blockHeight]
    }

}
//-------------------------------------------------
const arrayOfblocks = [
    new Block(10, 700),
    new Block(80, 700),
    new Block(150, 700),
    new Block(220, 700),
    new Block(290, 700),
    new Block(360, 700),
    new Block(430, 700),
    new Block(500, 700),
    new Block(10, 660),
    new Block(80, 660),
    new Block(150, 660),
    new Block(220, 660),
    new Block(290, 660),
    new Block(360, 660),
    new Block(430, 660),
    new Block(500, 660),
    new Block(10,620),
    new Block(80,620),
    new Block(150,620),
    new Block(220,620),
    new Block(290,620),
    new Block(360,620),
    new Block(430,620),
    new Block(500,620),






]
const randomColors = ["#bcff00", "#ed12b0", "#846897", "#0077be", // dark blue
    "#ff7eb9", // pink
    "#ffff66", // yellow
    "#ff69b4",
    "#4e79a7", // blue shade
    "#f28e2b", // orange shade
    "#e15759", // pink shade
    "#edc948", // yellow shade
    "#b07aa1",
    "#e83e8c", // bright pink
    "#00bfff", // bright blue
    "#ff69b4", // hot pink
    "#9400d3", // dark violet
    "#ffc107", // bright orange
    "#40e0d0", // turquoise
    "#ff1493", // deep pink
    "#00ff7f", // spring green
    "#ff00ff", // magenta
    "#1e90ff", // dodger blue
    "#ff8c00", // dark orange
    "#00ced1", // dark turquoise
    "#ba55d3", // medium orchid
    "#7fffd4", // aquamarine
    "#ff6347", // tomato
    "#9370db"// medium purple

];

function addBlocks() {

    for (let i = 0; i < arrayOfblocks.length; i++) {
        let randomColorIndex = Math.floor(Math.random() * randomColors.length);
        const block = document.createElement('div');
        block.classList.add('block');
        playboard.appendChild(block);
        block.style.left = arrayOfblocks[i].bottomLeft[0] + 'px';
        block.style.bottom = arrayOfblocks[i].bottomLeft[1] + 'px';
        block.style.backgroundColor = randomColors[randomColorIndex];
    }



}


addBlocks()
//-------------------------moving bar
function movingBar(e) {

    switch (e.key) {
        case "ArrowLeft":
            if (currentBarPosition[0] > 0) {
                currentBarPosition[0] -= 5
                moveBar()

            }
            break;
        case "ArrowRight":
            if (currentBarPosition[0] < playboardWidth - blockWidth) {
                currentBarPosition[0] += 5

                moveBar()

            }
            break
    }

}

document.addEventListener('keydown', movingBar)
//-----------------------ball
const ball = document.querySelector('.ball')

let ballPosition = [currentBarPosition[0] + barWidth / 2, currentBarPosition[1] + barHeight + 10]
function setBall() {
    ballPosition
    ball.style.left = ballPosition[0] + 'px'
    ball.style.bottom = ballPosition[1] + 'px'
}

setBall()
//-------------------moving ball
let barRight;
let barleft = false;
let leftSide;
let rightSide

function moveBall() {
    ballPosition[0] += xDirection
    ballPosition[1] += yDirection
    setBall()
    checkCollisions()
}

let intervalId = setInterval(moveBall, 10)
let points = 0;
//---- check  FOR ballCollisions
let blockCollieded;
let nodeList = document.querySelectorAll(".block")
function checkCollisions() {
    for (let i = 0; i < arrayOfblocks.length; i++) {
        if ((ballPosition[0] < arrayOfblocks[i].bottomLeft[0] &&
            ballPosition[0] < arrayOfblocks[i].bottomLeft[1]) &&
            ((ballPosition[1] + ballDiameter) > arrayOfblocks[i].bottomLeft[1] &&
                ballPosition[1] < arrayOfblocks[i].topLeft[1])) {
            nodeList[i].remove()
            arrayOfblocks.splice(i,1)
            blockCollieded = true
            points++
            score.innerHTML = `Score :${points}`
            changeDirection()


        }
    }


    if (ballPosition[0] + ballDiameter > currentBarPosition[0] && ballPosition[0] < ballPosition[0] + barWidth && ballPosition[1] > currentBarPosition[1] && ballPosition[1] < currentBarPosition[1] + barHeight) {
        changeDirection()
    }
    if (ballPosition[0] >= (playboardWidth - ballDiameter) || ballPosition[1] >= (playboardHeight - ballDiameter)) {

        changeDirection()
    }
    if (ballPosition[0] <= 0) {
        changeDirection()

    }

    if (ballPosition[1] <= 0) {
        changeDirection()
        clearInterval(intervalId)
    }


}

function changeDirection() {
    if(blockCollieded){
        yDirection = -yDirection
    }
    if (ballPosition[0] >= playboardWidth - ballDiameter) {
        xDirection = -xDirection
        yDirection = -yDirection

    }
    if (ballPosition[1] >= playboardHeight - ballDiameter) {

        yDirection = -yDirection;

    }
    if (ballPosition[0] <= 0) {
        xDirection = -xDirection
    }

    
    if (ballPosition[1] <= 0) {

        clearInterval(intervalId)
        modalOverlay.style.display = "flex";
        timeOut.innerHTML = "3";
        setTimeout(() => {
            timeOut.innerHTML = "2";
            setTimeout(() => {
                timeOut.innerHTML = "1";
                setTimeout(() => {
                    location.reload();
                }, 1000);
            }, 1000);
        }, 1000);


    }
}
//---modal 'Game over'
restartBtn.addEventListener('click', () => {
    modalOverlay.style.display = "none";
    clearInterval(intervalId)
});
//start button
const resumeBtn = document.querySelector('.resume-button');
const pauseBtn = document.querySelector('.pause-button');

pauseBtn.addEventListener('click', () => {
    clearInterval(intervalId)
});
resumeBtn.addEventListener('click', () => {
    let newIntervalId = setInterval(moveBall, 10)
});
