function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculate() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function handleKeyPress(event) {
    var key = event.key;
    if (!isNaN(key) || key === '.' || '+-*/'.indexOf(key) !== -1) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    }
}

document.addEventListener('keydown', handleKeyPress);