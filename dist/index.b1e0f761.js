//var draggables = document.querySelectorAll('.draggable');
var containers = document.querySelectorAll(".container");
var blueButton = document.querySelector(".spawn.blue");
var redButton = document.querySelector(".spawn.red");
var controls = document.querySelector(".controls");
blueButton.addEventListener("click", function() {
    var original = document.getElementById("blue-potion");
    original.classList.remove("template");
    var copy = original.cloneNode(true);
    original.classList.add("template");
    copy.addEventListener("dragstart", ()=>{
        copy.classList.add("dragging");
    });
    copy.addEventListener("dragend", ()=>{
        copy.classList.remove("dragging");
    });
    controls.appendChild(copy);
});
redButton.addEventListener("click", function() {
    var original = document.getElementById("red-potion");
    original.classList.remove("template");
    var copy = original.cloneNode(true);
    original.classList.add("template");
    copy.addEventListener("dragstart", ()=>{
        copy.classList.add("dragging");
    });
    copy.addEventListener("dragend", ()=>{
        copy.classList.remove("dragging");
    });
    controls.appendChild(copy);
});
containers.forEach((container)=>{
    container.addEventListener("dragover", ()=>{
        if (container.hasChildNodes()) return;
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
