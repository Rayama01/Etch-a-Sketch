const contain = document.querySelector(".container");
const defaultBtn = document.querySelector(".defaultBtn");
const newGridBtn = document.querySelector(".newGridBtn");
const blackBtn = document.querySelector(".blackBtn");
const rainbowBtn = document.querySelector(".rainbowBtn");
const clearBtn = document.querySelector(".clearGridBtn")
let blackPixel = false;
let grid;

function grid16() {
    for(i = 0; i < 16 * 16; i++) {
        grid = document.createElement("div");
        grid.classList = "grid-cell";
        grid.setAttribute('id', 'ez');
        grid.setAttribute('style', 'width: 34.375px; height: 34.375px; box-sizing: border-box; border: 0.5px solid rgb(197, 197, 197);;');
        contain.appendChild(grid);
            }
    }

grid16();




newGridBtn.onclick = function newGrid() {
    contain.innerHTML = "";
    gridWidth = parseInt(prompt("Enter new width less than 50: "));
    gridHeight = parseInt(prompt("Enter new height less than 50: "));
    if(gridWidth <= 50 & gridHeight <= 50){
        for(i = 0; i < gridWidth * gridHeight; i++) {
            grid = document.createElement("div");
            grid.classList = "grid-cell";
            grid.setAttribute('style','box-sizing: border-box; border: 1px solid rgb(197, 197, 197);');
            grid.style.width = 550 / gridWidth + "px";
            grid.style.height = 550 / gridHeight + "px";
            contain.appendChild(grid);
        }
    } else {
        grid16();
    }
    defaultBtn.onclick = function() {
        contain.innerHTML = "";
        grid16();
    }}

contain.addEventListener("dragover", function(event) {
    const target = event.target;
    if(target.matches(".grid-cell") && blackPixel == false) {
        target.style.backgroundColor = randomRgb();
    } else if(target.matches(".grid-cell") && blackPixel == true) {
        target.style.backgroundColor = "black";
    }
})


blackBtn.addEventListener("click", function() {
    blackPixel = true;
})

rainbowBtn.addEventListener("click", function() {
    blackPixel = false;
})


clearBtn.addEventListener("click", function() {
    let ez = document.querySelectorAll(".grid-cell");
    for (let i = 0; i < ez.length;  i++ ){
        ez[i].style.removeProperty("background-color");
        }

})
function randomRgb() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let rgb1 = `rgb(${red}, ${green}, ${blue})`;
    return rgb1;
}