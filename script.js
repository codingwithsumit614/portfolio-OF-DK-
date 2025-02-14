function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
// Add this to script.js
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/[0-9+\-*/.=]|Enter|Backspace|Delete/.test(key)) {
        event.preventDefault();
        if (key === 'Enter' || key === '=') {
            calculateResult();
        } else if (key === 'Backspace' || key === 'Delete') {
            deleteLast();
        } else {
            appendToDisplay(key);
        }
    }
});

// Add this to script.js
function toggleTheme() {
    const body = document.body;
    const calculator = document.querySelector('.calculator');
    body.classList.toggle('light-theme');
    calculator.classList.toggle('light-theme');
}