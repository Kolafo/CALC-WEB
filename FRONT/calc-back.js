let num = ""
let operato = ""
function updateOutput(value) {
    if ((value===',' && num.includes(',')) || (value===',' && num.length===0)){
        return
    }
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

function clear(){
    document.getElementById('result').textContent = "";
    num = "";
    operato = "";
}