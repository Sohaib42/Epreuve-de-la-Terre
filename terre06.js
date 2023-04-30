const arguments = process.argv[2];
console.log(arguments)
var sliced = arguments.slice(2)
process.argv.shift();
process.argv.shift();
if(typeof arguments === 'string' && isNaN(arguments)){
    var arrayToreverse = process.argv.toString().split("");
    var reversedArray =  arrayToreverse.reverse();
    var joinArray = reversedArray.join("")
    console.log(joinArray)
    console.log("its a string")
}else{
    console.log("Not a string");
}


