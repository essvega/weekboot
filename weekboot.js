const readline = require('readline');


var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var letters = ["a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F", ":"];
let val = [];


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your DVR MAC address 4 last digits =>  00:00:00:00:', (answer) =>{

    for(let p = 0; p < answer.length; p++){
        if(answer.length != 5 | answer[2] != ":"){
            console.log("Error!! Wrong input format");
            break
        }
        else if(!letters.includes(answer[p])){
            console.log("Error! Letter not found in Hexagecimal notation");
            break
        }
        
        else if(p == 4){
            var elem = answer.split(':');
            //console.log(elem);

            //console.log(digisecon);
            

            for(let i = 0; i < elem.length; i++){
                var digi = elem[i].split('');
                
                var jey = convert(digi[0]);
                var jou = convert(digi[1]);

                var finalconv = Number(jey*16 + jou*1);
                val.push(finalconv);
                //console.log(jey, jou);
            }
            var hourt = val[0]%24;
            var dayt = Number(val[1]%7);
            //console.log(hourt, dayt);
            //[0] - hour, [1] - days
            if(hourt > 12){
                console.log(`Your DVR will reboot at: ${hourt - 12}:00 PM on ${days[dayt]}`);
            }else{
                console.log(`Your DVR will reboot at: ${hourt}:00 AM on ${days[dayt]}`);
            }

        }           
    }



    
    //var numfirst = digifirst[0]*16 + digifirst[1]*1;
    //var numsecon = digisecon[0]*16 + digisecon[1]*1;
    //console.log(numfirst);
    //console.log(numsecon);
    rl.close();
});




function convert(n){
    if(n == "A" | n == "a"){
        return 10;
    }else if(n == "B" | n == "b"){
        return 11;
    }else if(n == "C" | n == "c"){
        return 12;
    }else if(n == "D" | n == "d"){
        return 13;
    }else if(n == "E" | n == "e"){
        return 14;
    }else if(n == "F" | n == "f"){
        return 15;
    }else{
        return n;
    }
}