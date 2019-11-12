var palindrome = str => {
    var onlyLetters = /[W_\S]/g;
    var str = str.toLowerCase().replace(onlyLetters, '');

    for(var i = 0; i < str.length/2; i++){
        if(str[i] !==str[str.length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(palindrome("taco cat"));