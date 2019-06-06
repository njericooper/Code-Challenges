function sumsFiftyPlus(numOne, numTwo){
    //uncomment to test html
    //var numOne = document.getElementById("numOne").value;
    //var numTwo = document.getElementById("numTwo").value;

  if (numOne === 50 || numTwo === 50){
    return true
  }

if (numOne + numTwo === 50){
  return true;
  }
else {
  return false;
  }
}

//also, delete console.log to test html
console.log(sumsFiftyPlus(25,25));