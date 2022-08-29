const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    isWaitForSecondNumber: false,
};

function updateDisplay() {
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.isWaitForSecondNumber = false;
}

function deleteNum() {
    let startTxt = calculator.displayNumber;
    let endTxt = startTxt.slice(0, -1);
    if (endTxt == "") {
        calculator.displayNumber = 0;
    } else calculator.displayNumber = endTxt;
}

function inputDigit(digit) {
    if (calculator.displayNumber === '0') {
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
}

function inverseNumber() {
    if (calculator.displayNumber === '0') {
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
    if (!calculator.isWaitForSecondNumber) {
        calculator.operator = operator;
        calculator.isWaitForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;

        calculator.displayNumber = '0';
    } else {
        alert('Operator sudah ditetapkan');
    }
}

function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert('Anda belum menetapkan operator');
        return;
    }

    let result = 0;
    if (calculator.operator === '+') {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else if (calculator.operator === '-') {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    } else if (calculator.operator === 'x') {
        result = parseInt(calculator.firstNumber) * parseInt(calculator.displayNumber);
    } else if (calculator.operator === ':') {
        result = parseInt(calculator.firstNumber) / parseInt(calculator.displayNumber);
    }

    calculator.displayNumber = result;
}

const buttons = document.querySelectorAll('.button');
for (const button of buttons) {
    button.addEventListener('click', function(event) {
        const target = event.target;

        if (target.classList.contains('allClear')) {
            clearCalculator();
            updateDisplay();
            return;
        }

        if(target.classList.contains('backspace')) {
            deleteNum();
            updateDisplay();
            return;
        }

        if (target.classList.contains('negative')) {
            inverseNumber();
            updateDisplay();
            return;
        }

        if (target.classList.contains('equals')) {
            performCalculation();
            updateDisplay();
            return;
        }

        if (target.classList.contains('operator')) {
            handleOperator(target.innerText);
            return;
        }

        inputDigit(target.innerText);
        updateDisplay();
    });
}