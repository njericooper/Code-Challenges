function doubleDifference() {
    
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    if (input>13){ 
    var myResult = (input - 13) * 2;
    output.value = myResult;
    }
  }