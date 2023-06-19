let colorPicker = document.getElementById("colorPicker").value;
let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWidth").value;

let table = document.getElementById("pixelCanvas");
let sizePicker = document.getElementById("sizePicker");

sizePicker.addEventListener('submit', function (event) {
    event.preventDefault();
    let height = document.getElementById("inputHeight").value;
    let width = document.getElementById("inputWidth").value;
    makeGrid(height, width);
});
   
function makeGrid(height, width) {
    table.innerHTML = null;
    for(let i =0; i < height; i++) {
       let row  = table.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener("click", function (event) {
                let colorPicker = document.getElementById("colorPicker").value;
                    cell.style.backgroundColor = colorPicker;
            });
            cell.addEventListener("dblclick", function (event) {
                cell.style.backgroundColor = "inherit";
            });
        }
    }
}
