let fullTime = process.argv[2];
let newTime = fullTime.split(':');
console.log(newTime);
let hour=parseInt(newTime[0]);
const minutes = newTime[1];

if(isNaN(hour) || isNaN(minutes)){
    console.log("Rentrer un nombre")
}else{
    if(hour > 23 || minutes > 59){
        console.log("Enter a valid time");
    }else{
        if(hour == 12){
            console.log(hour+":"+minutes+"PM")
        }else if(hour == 0){
            console.log(hour+12+":"+minutes+"AM")
        }
        else if(hour > 12){
            console.log(hour - 12 +":"+minutes+ "PM")
        }
        else if(hour < 12){
            console.log(hour+":"+minutes+"AM")
        }
    }
}
