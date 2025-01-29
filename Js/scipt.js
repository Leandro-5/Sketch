const sketchpad = document.getElementById('sketchpad');
const limpiarButton = document.getElementById('limpiar');//AGG
const cambiarTamañoButton = document.getElementById('cambiarTamaño');//Agg / modifique
const toggleRainbowButton = document.getElementById('toggleRainbow');
let isRainbow = false; //Agg
let gridSize = 16; // Tamaño inicial de la cuadrícula AGG

function createGrid(size) {
    sketchpad.innerHTML = '';// Limpia la cuadrícula antes de crear una nueva
    sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${size},1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', changeColor);
        sketchpad.appendChild(cell);
    }
}

function changeColor(e) {
    //console.log(e);
    if (isRainbow) {
        const color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
        e.target.style.backgroundColor = color //Modify
    } else {
        e.target.style.backgroundColor = '#000';
    }
}

// Botón para limpiar la cuadrícula (sin cambiar el tamaño)
limpiarButton.addEventListener('click', () => {
    document.querySelectorAll('.cell').forEach(cell => cell.style.backgroundColor = '');
}); //AGG

// Botón para cambiar el tamaño de la cuadrícula
cambiarTamañoButton.addEventListener('click', () => {
    let newSize = prompt('Entre un número del 1 hasta el 100: ', gridSize);//cambie la variable (newSize)
    newSize = parseInt(newSize); //AGG
    if (newSize > 0 && newSize <= 100) {
        gridSize = newSize; //Agg
        createGrid(gridSize);
    } else {
        alert('Ingrese un número válido entre 1 y 100.');
    }
});
// Botón para activar/desactivar modo Rainbow
toggleRainbowButton.addEventListener('click', () => {
    isRainbow = !isRainbow;
    toggleRainbowButton.textContent = isRainbow ? 'Desactivar Rainbow' : 'Activar Rainbow';

});
createGrid(gridSize); //Inicializa la cuadrícula con el tamaño predeterminado


