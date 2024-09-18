const circle = document.getElementById('circle');
const gameArea = document.getElementById('gameArea');

let posX = 50;
let posY = 50;

const moveSpeed = 10;
const originalBackgroundColor = '#7fffd4';

document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'ArrowUp': 
            if (posY > 0) posY -= moveSpeed;
            break;

        case 'ArrowDown': 
            if (posY < window.innerHeight - circle.offsetHeight) posY += moveSpeed;
            break;

        case 'ArrowLeft': 
            if (posX > 0) posX -= moveSpeed;
            break; 

        case 'ArrowRight':
            if (posX < window.innerWidth - circle.offsetWidth) posX += moveSpeed;
            break;
    }
    UpdateCirclePosition();
});

function UpdateCirclePosition() {
    circle.style.left = `${posX}px`;
    circle.style.top = `${posY}px`;
}

function CreateSquares() {
    ClearShapes();
    gameArea.style.backgroundColor = 'red';

    for (let i = 0; i < 4; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
        square.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
        gameArea.appendChild(square);
    }
}

function CreateCircles() {
    ClearShapes();
    gameArea.style.backgroundColor = 'green';

    for (let i = 0; i < 5; i++) {
        const smallCircle = document.createElement('div');
        smallCircle.classList.add('small-circle');
        smallCircle.style.left = `${Math.random() * (window.innerWidth - 30)}px`;
        smallCircle.style.top = `${Math.random() * (window.innerHeight - 30)}px`;
        gameArea.appendChild(smallCircle);
    }
}