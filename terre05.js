var arguments = process.argv;
var sliced = arguments.slice(2)

if (sliced[0] > sliced[1] && sliced[1] != 0){
    console.log("Résultat : " + sliced[0]/sliced[1])
    console.log("Reste : " + sliced[0]%sliced[1])
}else{
    console.log("erreur");
}