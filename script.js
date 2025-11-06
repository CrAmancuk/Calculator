let result = document.getElementById('result');

function appendNumber(number) {
    result.value += number;
}

function appendOperator(operator) {
    result.value += operator;
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (e) {
        result.value = 'Error';
    }
}

function clearResult() {
    result.value = '';
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}
