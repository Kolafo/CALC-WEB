let num = "";
let ans = [];
function updateOutput(value) {
    document.getElementById('result').textContent += value;
    ans += value
}
function operate(value) {
    document.getElementById('operator').textContent = value;
}
function clearOutput() {
    document.getElementById('result').textContent = '';
    ans = []
}
