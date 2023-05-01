let fullTime = process.argv[2];
let newTime = fullTime.split(':');
console.log(newTime);
let hour=newTime[0];
const minutes = newTime[1];
console.log(minutes)

if(isNaN(hour)){
    console.log("Rentrer un nombre")
}else{
    if(hour > 12 ||hour == 0 || minutes > 59){
        console.log("Enter a valid time");
    }else{
        if(hour == 12 && minutes.includes('PM')){
            console.log(hour+":"+minutes.slice(0,2))
        }else if(hour == 12 && minutes.includes('AM')){
            console.log("00"+":"+minutes.slice(0,2))
        }
        else if(hour !=12 && minutes.includes("PM")){
            console.log(parseInt(hour) + 12 +":"+minutes.slice(0,2))
        }
        else if(hour !=12 && minutes.includes("AM")){
            console.log(hour+":"+minutes.slice(0,2))
        }
    }
}
