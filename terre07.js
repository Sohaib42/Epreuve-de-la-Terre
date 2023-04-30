const arguments = process.argv[2];
console.log(arguments)
var sliced = arguments.slice(2)
process.argv.shift();
process.argv.shift();
if(typeof arguments === 'string' && isNaN(arguments)){
    var arrayToreverse = process.argv.toString().split("");
console.log(arrayToreverse.length)
}else{
    console.log("Not a string");
}


