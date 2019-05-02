var oneAndTen = Math.floor(Math.random() * 10) + 1;

document.getElementsByClassName("guess").onClick = function() {
 var userGuess = document.getElementsById("input").value;

 if (userGuess == oneAndTen)
 {
     alert("Lit. You guessed it. Congrats, Fam.");
 }
 else {
    alert("Not matched");
 }
 return Math.floor(Math.random() * (max - min)) + min;
}