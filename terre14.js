let argument = process.argv;
argument.shift();
argument.shift();
let validation = 0;

for (i = 0; i < argument.length;i++){
    if(!(isNaN(argument[i]))){
        if(argument[i] < argument[i+1]){
            validation++
        }
    }else{
        console.log("Entrer uniquement des nombres !")
        validation=null;
        break;
    }
}

if(validation == argument.length -1){
    console.log("Triée !")
}else if(validation===null){
    console.log("Entrer uniquement des nombres !")
}else{
    console.log("Pas triée")
}
