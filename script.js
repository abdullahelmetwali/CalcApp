// Get the display element
const display = document.getElementById('display');

// Add event listeners for special buttons
document.getElementById('clear').addEventListener('click', () => {
    display.textContent = '0';
});

document.getElementById('delete').addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1) || '0';
});

document.getElementById('equals').addEventListener('click', () => {
    try {
        display.textContent = eval(display.textContent.replace('÷', '/').replace('x', '*'));
    } catch {
        display.textContent = 'Error';
    }
});

// Add event listeners for number and operator buttons
document.getElementById('zero').addEventListener('click', () => displayValue('0'));
document.getElementById('one').addEventListener('click', () => displayValue('1'));
document.getElementById('two').addEventListener('click', () => displayValue('2'));
document.getElementById('three').addEventListener('click', () => displayValue('3'));
document.getElementById('four').addEventListener('click', () => displayValue('4'));
document.getElementById('five').addEventListener('click', () => displayValue('5'));
document.getElementById('six').addEventListener('click', () => displayValue('6'));
document.getElementById('seven').addEventListener('click', () => displayValue('7'));
document.getElementById('eight').addEventListener('click', () => displayValue('8'));
document.getElementById('nine').addEventListener('click', () => displayValue('9'));
document.getElementById('add').addEventListener('click', () => displayValue('+'));
document.getElementById('subtract').addEventListener('click', () => displayValue('-'));
document.getElementById('multiply').addEventListener('click', () => displayValue('x'));
document.getElementById('divide').addEventListener('click', () => displayValue('/'));
document.getElementById('decimal').addEventListener('click', () => displayValue('.'));

// Function to append values to the display
const displayValue = (value) => {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}
