const container = document.querySelector('#container');

//recreating square over and over
let square; 
for(i = 0; i < 256; i++) {
    //const square is inside to generate a new div
    square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

container.style.cssText = 'display: flex; text-align:center; height: 50vh; width: 50vw; flex-wrap: wrap; border: 3px solid blue;'
