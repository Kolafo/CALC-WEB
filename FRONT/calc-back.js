let ans = 0;
let current = '';
let operand = '';
let sum = 0;

// let all = '';

function clearAll() {
    ans = 0;
    current = '';
    // all = '';
    document.getElementById('result').innerText = '0';
}

function backspace() {
    if (operand != '' && current.length === 1) {
        current = '';
        document.getElementById('result').innerText = '0';
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
    if (value === '.' && current === '' && operand != '') {
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
    console.log(current + '!')
}

function operando(value) {
    console.log(value, current, 'operand')
    /*        all = current + value*/
    console.log(current)
    if (current != '') {
        val = parseFloat(current)
        current = '';
    }
    operand = value;
    document.getElementById('result').innerText = value;
}

function percent() {
    console.log(parseFloat(document.getElementById('result').innerText))
    if (operand === '') {
        current = (parseFloat(document.getElementById('result').innerText) / 100).toString();
        document.getElementById('result').innerText = current;
    } else {
        switch (operand) {
            case '+':
                current = (val * parseFloat(current)/100).toString()
                break;
            case '−':
                current = (val * parseFloat(current)/100).toString()
                break;
            case '×':
                current = (val / 100).toString()
                break;
            case '÷':
                current = (val / 100).toString()
                break;
        }
        document.getElementById('result').innerText = current
    }
}

function calculate() {
    console.log(current, operand, val, 'ans')
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