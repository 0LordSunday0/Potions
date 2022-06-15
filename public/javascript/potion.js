//var draggables = document.querySelectorAll('.draggable');
var containers = document.querySelectorAll('.container');
var blueButton = document.querySelector('.spawn.blue');
var redButton = document.querySelector('.spawn.red');
var controls = document.querySelector('.controls');

var gameBoard = [];

var boardWidth = 3;
var boardHeight = 3;

for(let i = 0; i < boardHeight; i ++){
    gameBoard.push([boardWidth]);
}


blueButton.addEventListener('click', function() {
    var original = document.getElementById("blue-potion");
    original.classList.remove('template');
    var copy = original.cloneNode(true);
    original.classList.add('template');
    
    copy.addEventListener('dragstart', () => {
        copy.classList.add('dragging')
    })

    copy.addEventListener('dragend', () => {
        copy.classList.remove('dragging')
    })

    controls.appendChild(copy);
    
})

redButton.addEventListener('click', function() {
    var original = document.getElementById("red-potion");
    original.classList.remove('template');
    var copy = original.cloneNode(true);
    original.classList.add('template');
    
    copy.addEventListener('dragstart', () => {
        copy.classList.add('dragging')
    })

    copy.addEventListener('dragend', () => {
        copy.classList.remove('dragging')
    })

    controls.appendChild(copy);
    
})

containers.forEach(container => {
    container.addEventListener('dragover', () => {
        if(container.hasChildNodes()){
            return;
        }
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable);
        container.id
    })
})

var gameOn = false;
while(gameOn){
    if(checkWinner()){
        gameOn = false;
    }

}

function updateBoard(){
    container.forEach(container => {
        if(container.hasChildNodes()){
            if(container.id = "zero-zero"){
                gameBoard[0][0] = blueOrRed(container.firstChild());
            }
            if(container.id = "one-one"){
                gameBoard[1][1] = blueOrRed(container.firstChild());
            }
            if(container.id = "two-two"){
                gameBoard[2][2] = blueOrRed(container.firstChild());
            }
            if(container.id = "one-zero"){
                gameBoard[1][0] = blueOrRed(container.firstChild());
            }
            if(container.id = "two-zero"){
                gameBoard[2][0] = blueOrRed(container.firstChild());
            }
            if(container.id = "zero-one"){
                gameBoard[0][1] = blueOrRed(container.firstChild());
            }
            if(container.id = "zero-two"){
                gameBoard[0][2] = blueOrRed(container.firstChild());
            }
            if(container.id = "one-two"){
                gameBoard[1][2] = blueOrRed(container.firstChild());
            }
            if(container.id = "two-one"){
                gameBoard[2][1] = blueOrRed(container.firstChild());
            }
        }
    })
}

function blueOrRed(element){
    if(element.id = "blue-potion"){
        return "blue";
    }
    return "red";
}

function checkWinner(){
    var winner = false;
    for(let i = 0; i < boardHeight; i++){
        for(let j = 0; j < boardWidth; j++){
            
        }
    }

    return winner;
}