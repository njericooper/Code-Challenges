var oneAndTen = Math.floor(Math.random() * 10) + 1;

function guess() {
 var userGuess = document.getElementById("input").value;

 if (userGuess == oneAndTen)
 {
     alert("Lit. You guessed it. Congrats, Fam.");
 }
 else {
    alert("Not matched");
 }
}