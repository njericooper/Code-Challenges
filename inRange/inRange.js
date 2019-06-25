const inRange = (x, y) => ( x>= 50 && x<= 99 || y>= 50 && y<= 99 ) ? "true" : "false"

console.log(inRange(30, 20));
console.log(inRange(30, 80));