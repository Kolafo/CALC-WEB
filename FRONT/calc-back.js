let ans = '';
let current = '';
let all = '';

function clearAll() {
    ans = '';
    current = '';
    all = '';
    document.getElementById('result').innerText = '0';
}

function backspace() {
    if (current.length === 1 || current==='') {
        current = '0';
    } else {
        current = current.slice(0, -1);
    }
    document.getElementById('result').innerText = current;
}

function insert(value) {
    if (value==='0' && document.getElementById('result').innerText==='0') {
        return;
    }
    current += value;
    document.getElementById('result').innerText = current;
}

function operando(value) {
    if (current.length != 0) {
        all = current + value
        current = '';
        document.getElementById('result').innerText = all;
    }
}