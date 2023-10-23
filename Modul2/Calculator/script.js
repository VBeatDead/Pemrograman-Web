let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay(type) {
    if (type === 'CE') {
        display.value = display.value.slice(0, -1);
    } else if (type === 'C') {
        display.value = '';
    }
}

function calculateResult() {
    try {
        let expression = display.value.replace(/%/g, '/100');
        expression = expression.replace(/(?<=\d)0+(?=\.\d+)/g, '');
        let result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}