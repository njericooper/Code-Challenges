function equalArray (x, y) {
    if(x.length !== y.length) //if first array length is not equal to the length of 2nd array
        return false; 
    for(i = x.length; i--;) { //assigns i to the index location in array, subtract index value as items are counted
        if(x[i] !== y[i]) // if index value of first array does not equal index value of 2nd array
            return false;
    }  
    return true;
};

console.log(equalArray([1, 2], [1, 3]));
console.log(equalArray([1, 2], [1, 2]));
console.log(equalArray([4, 5, 6], [4, 5, 6]));