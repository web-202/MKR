function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const size = 5;

$(() => {
    const data = generateRandomTable(size)
    renderTable(data)
})

function renderTable(data) {
    const container = $(".container")
    for (let i = 0; i < data.length; i++) {
        const cell = $(`<div class='cell'>${data[i].value}</div>`)
        cell.css("color", data[i].color)

        cell.on("click", () => {
            data[i].value += 5;
            cell.text = data[i].value;
            console.log(data[i].value)
            container.empty()
            renderTable(data)
        })

        container.append(cell)
    }
}

function generateRandomTable(size) {
    let colors = ["#862626", "#44622c", "#4c99d0", "#252121", "#860f19", "#866262", "#3acc5c", "#ef502c", "#d319d9", "#e71313",]

    let result = []

    let set = new Set()
    while (set.size !== size * size) {
        set.add(getRandomInt(size * size))
    }

    set.forEach(item => {
        result.push(item + 1)
    })

    for (let i = 0; i < result.length; i++) {
        result[i] = ({color: colors[getRandomInt(10)], value: result[i]})
    }

    return result;
}