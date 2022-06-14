var draggables = document.querySelectorAll(".draggable");
var containers = document.querySelectorAll(".container");
draggables.forEach((draggable)=>{
    draggable.addEventListener("dragstart", ()=>{
        draggable.classList.add("dragging");
    });
    draggable.addEventListener("dragend", ()=>{
        draggable.classList.remove("dragging");
    });
});
containers.forEach((container)=>{
    container.addEventListener("dragover", ()=>{
        const draggable = document.querySelector(".dragging");
        container.appendChild(draggable);
    });
});
var gameBoard = [];
var boardWidth = 3;
var boardHeight = 3;
for(let i = 0; i < boardHeight; i++)gameBoard.push([
    boardWidth
]);
var gameOn = false;
while(gameOn);
function renderPotion(color, position) {}

//# sourceMappingURL=index.b1e0f761.js.map
