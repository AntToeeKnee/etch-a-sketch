const container = document.querySelector('#container');

//recreating square over and over
//NTS: Okay so when we did 'let square' on the outside rather than 'const square' on the inside of the for loop, when we did even listener, it
//was constantly referencing the same square. So rather than giving each div it's own event listener, once we hovered over any square it triggered it.
//And since they were referencing the same square only the div at the end had it

let gridCount = 16;

function makeGrid() {
    const cssSpacing = (gridCount/(gridCount*gridCount)) * 100;
    const cssString = cssSpacing.toString() + '%';
    if(gridCount > 100 || gridCount === "" || gridCount == 0) {
        alert('Please choose a valid/lower amount for the grid. Setting to default size');
        gridCount = 16;
        makeGrid();
    }
    else { 
        for(i=0; i < gridCount * gridCount; i++) {
            const square = document.createElement('div');
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'black';
            });
            square.classList.add('square');
            container.appendChild(square);
            square.style.cssText = 'flex: 0 0 ' + cssString;
        }
    }
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let newGridSize =  document.getElementById("new-size").value;
    gridCount = newGridSize;
    makeGrid();
}

makeGrid();

container.style.cssText = 'display: flex; text-align:center; height: 50vh; width: 28vw; flex-wrap: wrap; border: 3px solid blue;'