const container = document.querySelector("#container");

createGrid(16);


const gridBtn = document.querySelector("#gridBtn");

gridBtn.addEventListener('click', () => {
    let newGrid = prompt("Enter a new grid size (NxN):");
    if(newGrid > 99)
    {
        alert("Error: Grid size must be smaller than 100!");
    }
    else
    {
        deleteGrid();
        createGrid(newGrid);
    }
})


const clearBtn = document.querySelector('#clearBtn');

clearBtn.addEventListener('click', () => {
    location.reload();
})


/////////////////////////////////FUNCTIONS/////////////////////////////////////////

function createGrid(newGrid)
{
    let width = 960 / newGrid;
    for(let ii = 0; ii < newGrid; ii++)
    {
        const column = document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);

        for(let jj = 0; jj < newGrid; jj++)
        {
            const div = document.createElement('div');
            div.classList.add('square');
            column.appendChild(div);
            div.style.width =  width +"px";
            div.style.height = width +"px";
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            })
        }
    }
}

function deleteGrid()
{
    while(container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
}