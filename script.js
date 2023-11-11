document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');
  
    buttons.forEach((button) => {
      button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'red';
  
        const direction = button.getAttribute('data-direction');
  
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = `Move ${direction}`;
  
        const rect = button.getBoundingClientRect();
        if (direction === 'up') {
          tooltip.style.top = rect.top - 30 + 'px';
          tooltip.style.left = rect.left + 'px';
        } else if (direction === 'down') {
          tooltip.style.top = rect.bottom + 'px';
          tooltip.style.left = rect.left + 'px';
        } else if (direction === 'left') {
          tooltip.style.top = rect.top + 'px';
          tooltip.style.left = rect.left - 100 + 'px';
        } else if (direction === 'right') {
          tooltip.style.top = rect.top + 'px';
          tooltip.style.left = rect.right + 'px';
        }
  
        document.body.appendChild(tooltip);
      });
  
      button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '';
  
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
          tooltip.remove();
        }
      });
    });
  });
  