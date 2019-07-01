function removeSubstringg(string) {
    var substring = "script";
    var subStringIndex = string.indexOf(substring); //the index of the substring
    if(subStringIndex == 5){ //if its in index 4 or greater
        return string; //return the string
    }
    return string.slice(0, subStringIndex) + string.slice(subStringIndex + substring.length); //then return the string spliced from index 0 up until where the supstring begins. Concatinate whatever is after the subscring
}

console.log(removeSubstringg("javascriptslkjslafdkjga"));