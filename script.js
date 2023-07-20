const contain = document.querySelector(".container");
const newGridBtn = document.querySelector(".btnDiv")

for(i = 0; i < 16 * 16; i++) {
    const grid = document.createElement("div");
    grid.classList = 'grid-cell'
    contain.appendChild(grid);
}

