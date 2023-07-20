const contain = document.querySelector(".container");

for(i = 0; i < 16 * 16; i++) {
    const grid = document.createElement("div");
    grid.classList = 'grid-cell'
    contain.appendChild(grid);
}