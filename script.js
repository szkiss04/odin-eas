function randomColor( ) {
    return `${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}`;
}

function setupGrid( dimension, container ) {
    container.style.width = `${16 * dimension}px`
    let gridElement;
    for( let i = 0; i < dimension**2; i++ ) {
        gridElement = document.createElement("div");
        gridElement.classList.add( "grid-element" );
        // gridElement.style.backgroundColor = `rgb(${randomColor()})`;
        container.appendChild( gridElement );
        gridElement.addEventListener("mouseover", function () {
            this.classList.add( "filled" );
        });   
    }
}

setupGrid( 16, document.getElementById("pixel-container") );

