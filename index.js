const counter = document.getElementById("counter")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")
const resetBtn = document.getElementById("reset")

counter.textContent = "0";

prevBtn.addEventListener("click", () => {
    const number = parseInt(counter.textContent);

    if (number !== 0) {
        counter.textContent = number - 1
    }
})

nextBtn.addEventListener("click", () => {
    const number = parseInt(counter.textContent);

    if (number !== 100) {
        counter.textContent = number + 1
    }
})

resetBtn.addEventListener("click", () => {
    counter.textContent = "0"
})
