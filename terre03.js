const alphabet = "abcdefghijklmnopqrstuvwxyz";
var arguments = process.argv;
var sliced = arguments.slice(2)
for(i=0;i<alphabet.length;i++){
    if(sliced[0] === alphabet.charAt(i)){
        console.log(alphabet.slice(i))
        break;
    }
}