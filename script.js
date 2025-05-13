function generateCards() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    if (!isNaN(start) && !isNaN(end) && end >= start) {
        for (let i = start; i <= end; i++) {
            const card = document.createElement('div');
            card.className = 'card';
            card.textContent = i;
            grid.appendChild(card);
        }
    }
}

function printPage() {
    window.print();
}