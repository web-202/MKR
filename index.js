document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById("grid-container");

    const numbers = Array.from({ length: 25 }, (_, index) => index + 1);

    const shuffledNumbers = shuffleArray(numbers);

    for (let i = 0; i < 25; i++) {
        const cell = document.createElement("div");
        cell.className = "cell random-color";
        cell.textContent = shuffledNumbers[i];
        setRandomBackgroundColor(cell);

        cell.addEventListener("click", function () {
            const currentValue = parseInt(this.textContent);
            const newValue = currentValue + 5;

            this.textContent = newValue;
        });

        gridContainer.appendChild(cell);
    }
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function setRandomBackgroundColor(element) {
    element.style.backgroundColor = randomColor();
}

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
