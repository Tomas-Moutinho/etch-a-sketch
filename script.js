const container = document.querySelector("#container");

for(let i = 0; i < 16; i++)
{
    const column = document.createElement('div');
    column.classList.add('column');
    container.appendChild(column);

    for(let j = 0; j < 16; j++)
    {
        const div = document.createElement('div');
        div.classList.add('square');
        column.appendChild(div);
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        })
    }
}


const gridBtn = document.querySelector("#gridBtn");

gridBtn.addEventListener('click', () => {
    let newGrid = prompt("Enter a new grid size (NxN):");
    if(newGrid > 99)
    {
        alert("Error: Grid size must be smaller than 100!");
    }
    else
    {
        for(let ii = 0; ii < newGrid; ii++)
        {
            
            for(let jj = 0; jj < newGrid; jj++)
            {

            }
        }
    }

})