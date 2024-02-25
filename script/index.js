
function deleteMe(){
    document.getElementById('myResult').innerText = ''
}


function calculated(value){
    document.getElementById('myResult').innerText += value;
}

function answer(){
    var a = document.getElementById('myResult').innerText;
    var b = eval(a);
    document.getElementById('myResult').innerText = b;
}