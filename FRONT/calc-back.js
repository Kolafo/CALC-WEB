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
    if (document.getElementById('result').innerText === '0') {
        return;
    }
    if (current.length === 1 || current==='') {
        document.getElementById('result').innerText = '0';
        current = '';
    } else {
        current = current.slice(0, -1);
        document.getElementById('result').innerText = current;
    }
}

function insert(value) {
    if ((value==='0' || value==='.') && document.getElementById('result').innerText==='0') {
        return;
    }
    if (value==='.' && current.includes('.')) {
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

const container = document.querySelector('.output');

container.addEventListener('input', function() {
    container.scrollLeft = container.scrollWidth;
});
const scrollText = () => {
    if (isScrolling) {
        container.scrollLeft = container.scrollWidth;
        isScrolling = false;
    }
}

setInterval(scrollText, 100); // Проверка каждые 100 миллисекунд