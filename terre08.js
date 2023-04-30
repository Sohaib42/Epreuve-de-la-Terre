const arguments1 = process.argv[2];
const arguments2 = process.argv[3];
console.log(arguments1);
console.log(arguments2);
let result = arguments1;
console.log(result)

if(!(isNaN(arguments1)) && !(isNaN(arguments2))){
    for(i = 0; i < arguments2-1;i++)
    {
        result *= arguments1 ;
        console.log(result)
    }
}
    else if (arguments1 < 0 || arguments2 < 0){
        console.log("Type only positive numbers");
    }
    else{
        console.log("Type only valid numbers")
    }