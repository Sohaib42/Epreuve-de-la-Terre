let argument = process.argv;
const param1 = argument[2];
const param2 = argument[3]
const param3 = argument[4];


let i = 0;
while (i < 1){
    if( !(isNaN(param1)) && !(isNaN(param2)) && !(isNaN(param3)) ){
        if((param1 > param2 || param1 > param3)  && (param1 < param2 || param1 < param3)){
            console.log(param1)
            i++
        }else if((param2 > param1 || param2 > param3)  && (param2 < param1 || param2 < param3)){
            console.log(param2)
            i++
        }else if((param3 > param1 || param3 > param2)  && (param3 < param1 || param3 < param2)){
            console.log(param3)
            i++
        }
        else{
            console.log("erreur");
            break
        }
    }else{
        console.log("Rentre 3 nombre entier valide");
        break;
    }
}
