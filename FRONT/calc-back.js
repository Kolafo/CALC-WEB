let ans = 0;
let current = '';
let operand = '';
// let all = '';

function clearAll() {
    ans = 0;
    current = '';
    // all = '';
    document.getElementById('result').innerText = '0';
}

function backspace() {
    if (document.getElementById('result').innerText === '0') {
        return;
    }
    if (current.length === 1 || current === '') {
        document.getElementById('result').innerText = '0';
        current = '';
    } else {
        current = current.slice(0, -1);
        document.getElementById('result').innerText = current;
    }
}
function insert(value) {
    if (document.getElementById('result').innerText === '0' && value === '.') {
        document.getElementById('result').innerText = '0.';
        current = '0.';
        return;
    }
    if ((value === '0') && document.getElementById('result').innerText === '0') {
        return;
    }
    if (value === '.' && current.includes('.')) {
        return;
    }
    current += value;
    document.getElementById('result').innerText = current;
}

function operando(value) {
    /*        all = current + value*/
    if (current != '') {
        val = parseFloat(current)
        current = '';
    }
    operand = value;
    document.getElementById('result').innerText = value;
}

function percent() {
    ans = parseFloat(document.getElementById('result').innerText) / 100;
    document.getElementById('result').innerText = ans;
}

function calculate() {
    if (val === '' || operand === '') {
        switch (operand) {
            case '+':
                ans += parseFloat(current);
                break;
            case '−':
                ans -= parseFloat(current);
                break;
            case '×':
                ans *= parseFloat(current);
                break;
            case '÷':
                ans /= parseFloat(current);
                break;
        }
    } else {
        switch (operand) {
            case '+':
                ans = val + parseFloat(current);
                break;
            case '−':
                ans = val - parseFloat(current);
                break;
            case '×':
                ans = val * parseFloat(current);
                break;
            case '÷':
                ans = val / parseFloat(current);
                break;
        }
    }
    document.getElementById('result').innerText = ans;
    current = '';
    operand = '';
    val = '';
}