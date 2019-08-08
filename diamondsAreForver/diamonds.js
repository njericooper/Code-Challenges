function diamondGem(width){
    var row; 
    var nextRow;
    var theDiamond = ''; // first row or diamond

    for(row = 0; row < width * 2 - 1; row++) {
        nextRow = row < width ? row : width * 2 - row - 2; // calculates the length of an array, keeps it less than or equal to the width
        theDiamond += Array(width - nextRow).join(' ') + Array(nextRow + 1).join('* ') + '*\n'; // indents next row.
    }
    console.log(theDiamond);
}

diamondGem(3); //calls function n width