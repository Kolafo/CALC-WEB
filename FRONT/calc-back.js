let ans = '';
let current = '';
function clearAll(){
    ans = '';
    current='';
    document.getElementById('result').innerText = '0';
}

function backspace(){
    if (current.length===1){
        current = '0';
    }
    else {
        current = current.slice(0, -1);
    }
    document.getElementById('result').innerText = current;
}

function insert(value){
    current = current + value;
    document.getElementById('result').innerText = current;
}
function divide(){
    ans = ans.toString() + "/";
    document.getElementById('result').innerText = ans;
}