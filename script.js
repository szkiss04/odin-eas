const pixelContainer = document.getElementById( "pixel-container" );
const newSketchButton = document.getElementById( "new-sketch" );
const rainbowModeCheckbox = document.getElementById( "rainbow-mode" );

newSketchButton.addEventListener( "click", newGrid );

function randomColor( ) {
    return `${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}`;
}

function newGrid( ) {
    const dimension = prompt("How big sketchpad do you want?");
    if( dimension < 1 || dimension > 100 ) {
        alert( "Invalid size! Type a number between 1-100!" );
        return;
    }
    removeGrid( );
    setupGrid( dimension, pixelContainer );
}

function removeGrid() {
    const oldGrid = document.querySelectorAll(".grid-element");
    oldGrid.forEach( ( element ) => {
        element.remove();
    });
}

function setupGrid( dimension, container ) {
    let gridElement;
    for( let i = 0; i < dimension**2; i++ ) {
        gridElement = document.createElement("div");
        gridElement.classList.add( "grid-element" );
        gridElement.style.width = `${100/dimension}%`;
        gridElement.style.height = `${100/dimension}%`;
        // gridElement.style.backgroundColor = `rgb(${randomColor()})`;
        container.appendChild( gridElement );
        gridElement.addEventListener("mouseover", function () {
            if( rainbowModeCheckbox.checked ) {
                this.style.backgroundColor = `rgb(${randomColor()})`;
            } else {
                this.style.removeProperty( "background-color" );
                this.classList.add( "filled" ); 
            }
        });   
    }
}

setupGrid( 16, pixelContainer );
