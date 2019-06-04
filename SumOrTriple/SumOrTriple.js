function sumOrTriple() {
    var firstNum = document.getElementById("num-1-input").value;
    var secNum = document.getElementById("num-2-input").value;
    var output = document.getElementById("output");
    var sum = firstNum.value + secNum.value;
    if (firstNum === secNum){ 
        var tripleSum = sum*3;
        output.value = tripleSum;
    }
    else {
        output.value = sum;
    }
}