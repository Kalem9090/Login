const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll('#buttons button'));
const resetButton = document.getElementById('reset');
let currentInput = '';

buttons.map(button => {
    button.addEventListener('click', (e) => {
        const btnValue = e.target.innerText;
        if (btnValue === '=') {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = "Error";
            }
        } else {
            currentInput += btnValue;
        }
        display.innerText = currentInput;
    });
});

resetButton.addEventListener('click', () => {
    currentInput = '';
    display.innerText = '0';
});

