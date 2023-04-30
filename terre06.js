var arguments = process.argv;
var sliced = arguments.slice(2)
process.argv.shift();
process.argv.shift();
var arrayToreverse = process.argv.toString().split("");
var reversedArray =  arrayToreverse.reverse();
var joinArray = reversedArray.join("")
console.log(joinArray);

