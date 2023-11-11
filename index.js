document.addEventListener('DOMContentLoaded', function () {
    const field = document.getElementById('field');

    function generateRandomNumber() {
      return Math.floor(Math.random() * 25) + 1;
    }

    function generateRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function generateCellContent() {
      const number = generateRandomNumber();
      const color = generateRandomColor();
      const size = Math.floor(Math.random() * 20) + 10; 
      return { number, color, size };
    }

    function createCell() {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      const content = generateCellContent();
      cell.textContent = content.number;
      cell.style.backgroundColor = content.color;
      cell.style.fontSize = content.size + 'px';
      cell.addEventListener('click', function () {
        cell.style.visibility = 'hidden';
      });
      return cell;
    }

    function createField() {
        for (let i = 0; i < 5; i++) {
          const row = document.createElement('tr');
           for (let j = 0; j < 5; j++) {
            const cell = createCell();
            row.appendChild(cell);
           }
          field.appendChild(row);
        }
    }

    createField();
});