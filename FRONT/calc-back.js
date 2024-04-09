let ans = 0;
let current = '';
let operand = '';
let sum = 0;
// let all = '';

function outputAns(ans) {
    document.getElementById('result').innerText = ans;
}

function clearAll() {
    ans = 0;
    current = '';
    // all = '';
    document.getElementById('result').innerText = '0';
}

function backspace() {
    if (operand != '' && current.length === 1) {
        current = '0';
        document.getElementById('result').innerText = current;
        return;
    }
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
        current = '0.';
        document.getElementById('result').innerText = current;
        return;
    }
    if (value === '0' && document.getElementById('result').innerText === '0') {
        return;
    }
    if (value === '.' && current.includes('.')) {
        return;
    }
    current += value;
    document.getElementById('result').innerText = current;
    console.log(current+'!')
}

function operando(value) {
    /*        all = current + value*/
    console.log(current)
    if (current != '') {
        val = parseFloat(current)
        current = '';
    }
    if (operand != '') {

    }
    operand = value;
    document.getElementById('result').innerText = value;
}

function percent() {
    if (typeof parseFloat(document.getElementById('result').innerText) === 'number') {
        ans = parseFloat(document.getElementById('result').innerText) / 100;
        document.getElementById('result').innerText = ans;
    }
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