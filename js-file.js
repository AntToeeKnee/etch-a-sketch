const container = document.querySelector('#container');

//recreating square over and over
//NTS: Okay so when we did 'let square' on the outside rather than 'const square' on the inside of the for loop, when we did even listener, it
//was constantly referencing the same square. So rather than giving each div it's own event listener, once we hovered over any square it triggered it.
//And since they were referencing the same square only the div at the end had it
for(i = 0; i < 256; i++) {
    //const square is inside to generate a new div
    const square = document.createElement('div');
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    });
    square.classList.add('square');
    container.appendChild(square);
}

container.style.cssText = 'display: flex; text-align:center; height: 50vh; width: 35vw; flex-wrap: wrap; border: 3px solid blue;'