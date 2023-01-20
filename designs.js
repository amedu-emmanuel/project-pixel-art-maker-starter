// Select color input
// Select size input

// call makeGrid() when size is submitted by the user
function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    let grid = '';

// loop over each row
    for (let a = 0; a < height; a++) {
        grid += '<tr class = "row-' + a + '">';
        for (let b = 0; b < width; b++) {
            grid += '<td class = "cell" id = "row-' + a + '_cell-' + b + '"></td>';
        }
        grid += '</tr>';
    }
    // add grid into table element
    table.innerHTML = grid;

    // Add click event to grid cells once the table grid has been created
    addClickEventToCells();
}

// gets values for height and width from form and use them to call makeGrid()
function formSubmission() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

// add click events to all cells
function addClickEventToCells() {
    const colorPicker = document.getElementById("colorPicker");
    const cells = document.getElementsByClassName('cell');
    for (let c = 0; c < cells.length; c++) {
        cells[c].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}

document.getElementById('sizePicker').onsubmit = function () {
    formSubmission();
};

// build a default 30x30 grid
makeGrid(30, 30);