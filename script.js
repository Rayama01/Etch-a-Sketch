const contain = document.querySelector(".container");
let defaultBtn = document.querySelector(".defaultBtn");
const newGridBtn = document.querySelector(".newGridBtn");
let grid;

function grid16() {
            for(i = 0; i < 16 * 16; i++) {
                grid = document.createElement("div");
                grid.classList = "grid-cell";
                grid.setAttribute('style', 'width: 34.375px; height: 34.375px; box-sizing: border-box; border: 1px solid black;');
                contain.appendChild(grid);
            }
    }

grid16();




newGridBtn.onclick = function() {
    contain.innerHTML = "";
    gridWidth = parseInt(prompt("Enter new width less than 100: "));
    gridHeight = parseInt(prompt("Enter new height less than 100: "));
    if(gridWidth <= 100 & gridHeight <= 100){
        for(i = 0; i < gridWidth * gridHeight; i++) {
            grid = document.createElement("div");
            grid.classList = "grid-cell";
            grid.setAttribute('style','box-sizing: border-box; border: 1px solid black;');
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
    }
    
}