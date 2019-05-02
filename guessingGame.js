var oneAndTen = Math.floor(Math.random() * 10) + 1;

document.getElementsByClassName("guess").onClick = function() {
 var userGuess = document.getElementsById("input").value;

 if (userGuess == oneAndTen)
 {
     console.log("Lit. You guessed it. Congrats, Fam.");
 }
 else {
    console.log("Not matched");
 }
}