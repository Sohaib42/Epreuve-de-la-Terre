var arguments = process.argv;
var sliced = arguments.slice(2)

if(sliced[0] % 2 == 0){
    console.log("pair");
}else if(sliced[0] % 2 == 1){
    console.log("impair");
}
else{
    console.log("Tu ne m'auras pas")
}