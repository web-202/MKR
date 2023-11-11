document.addEventListener("DOMContentLoaded", function () {
    createBoard();
});

function createBoard() {
    const container = document.getElementById("board");
    const table = document.createElement("table");

    
    const headerRow = document.createElement("tr");
    headerRow.appendChild(document.createElement("th")); 
    for (let i = 65; i <= 74; i++) {
        const th = document.createElement("th");
        th.textContent = String.fromCharCode(i);
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);


    for (let i = 1; i <= 10; i++) {
        const row = document.createElement("tr");
        const th = document.createElement("th");
        th.textContent = i;
        row.appendChild(th);

        for (let j = 65; j <= 74; j++) {
            const td = document.createElement("td");
            row.appendChild(td);
        }

        table.appendChild(row);
    }

    container.appendChild(table);
}
