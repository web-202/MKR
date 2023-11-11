const suggestions = [
    "area rugs",
    "blue area rugs",
    "navy blue area rugs",
    "grey area rug",
    "wool area rugs",
    "8 x 10 area rugs",
    "green area rugs",
    "red area rugs",
    "shaggy area rugs"
];

const input = document.getElementById('input');
const resultsContainer = document.getElementById('results');

const show = (results) => {
    if (results.length > 0) {
        const resultsEl = results.map(result => `<div class="results-el">${result}</div>`).join('');
        resultsContainer.innerHTML = resultsEl;
        resultsContainer.style.display = 'block';
        resultsContainer.style.fontSize= '20px'
    } else {
        resultsContainer.innerHTML = '';
        resultsContainer.style.display = 'none';
    }
}

input.addEventListener('input', () => {
    const inputValue = input.value.toLowerCase();
    const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(inputValue));

    show(filteredSuggestions);
});

resultsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('results-el')) {
        input.value = event.target.textContent;
        resultsContainer.style.display = 'none';
    }
});

