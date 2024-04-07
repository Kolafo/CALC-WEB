let num = ""
function updateOutput(value) {
    document.getElementById('result').textContent += value;
    num += value
    console.log(num)
}

function backspace() {
    document.getElementById('result').textContent = document.getElementById('result').textContent.slice(0, -1);
}