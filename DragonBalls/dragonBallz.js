function dragonBall(){ 
    var output1 = "The Journey continues...Next time on Dragon Ball Z!";
    for(let i = 0; i<=7; i++) {
        if(i<6)
            var words =  document.getElementById("output");
            let out1 = " The Journey continues...Next time on Dragon Ball Z!";
            words.innerHTML = out1;
             
        if (i=7)
            var wordz = document.getElementById("output");
            let out2 = " Summoning Shenron";
            wordz.innerHTML = out2;
    }
}
dragonBall();