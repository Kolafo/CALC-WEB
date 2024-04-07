let num = ""
let operato = ""
function updateOutput(value) {
    if (value=',' and num.inclued(',')) return{

    document.getElementById('result').textContent += value;
    num += value;
    console.log(num);
}

function backspace() {
    document.getElementById('result').textContent = document.getElementById('result').textContent.slice(0, -1);
    num = num.slice(0, -1);
    console.log(num);
}

function operator(value) {
    document.getElementById('result').textContent += value;
    operato = value;
    console.log(operato);
}
