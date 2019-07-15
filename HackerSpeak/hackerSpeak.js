function hacker(string) {
    var replaceLetter = string.replace(/[aeios]/gi, function(t){
        switch (t) { 
            case 'a': return'4';
            case 's': return '5';
            case 'i': return '1';
            case 'o': return '0';
            case 'e': return '3';
        }
    });
    return replaceLetter;
}

console.log(hacker("Njeri Cooper is a human that uses autocorrect so much that she cannot spell"));