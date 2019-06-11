function breakItDownBagItUp(word, position){
    firstHalf = word.substring(0, position);
    secondHalf = word.substring(position + 1, word.length);
    return (firstHalf + secondHalf);
}
