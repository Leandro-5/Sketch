const sketchpad = document.getElementById('sketchpad');
const resetearButton = document.getElementById('resetear');
const toggleRainbowButton = document.getElementById('toggleRainbow');
let isRainbow;

function createGrid(size) {
    sketchpad.innerHTML = '';
    sketchpad.style.gridTemplateColumns = `repeat (${size},1fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${size},1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', changeColor);
        sketchpad.appendChild(cell);
    }
}

function changeColor(e) {
    if (isRainbow) {
        const colores = Math.floor(Math.random() * 360);
        e.target.style.backgroundColor = `hsl(${colores}, 100%, 50%)`; /*hsl (tono aleatorio entre 0 y 360, 
        con saturación y luminosidad fijas).*/
    } else {
        e.target.style.backgroundColor = '#000';
    }
}

resetearButton.addEventListener('click', () => {
    const size = prompt('Entre un número del 1 hasta el 100: ', 16);
    if (size && size > 0 && size <= 100) {
        createGrid(size);
    }
});

toggleRainbowButton.addEventListener('click', () => {
    isRainbow = !isRainbow;
    toggleRainbowButton.textContent = isRainbow ? 'Desactivar Rainbow' : 'Activar Rainbow';

});
createGrid(16); // Recrear la grilla con el nuevo estado de rainbow


