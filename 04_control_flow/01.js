//  control flow in js

//  if statement
/*
const temperature=43

if(temperature<50){
        console.log(`${temperature} degree celcius`);
}
else{
    console.log(`temperature is greater than 50`);
}
*/

/*
const score=105

if(score>100){
    const power='fly'
    console.log(`user-power : ${power}`);
}
else{
    const power='Money'
    console.log(`user-power : ${power}`);
}

*/

const loggedInFromGoogle=true
const loggedInFromEmail=false

if(loggedInFromGoogle || loggedInFromEmail)
    {
        console.log("User Logged in Successfully");
    }

const day=50
switch(day)
{
    case 1:
        {
            console.log("Monday");
            break;
        }
    case 2:
        {
            console.log("Tuesday")
            break;
        }
    case 3:
        {
            console.log("Wednesday")
            break;
        }
    case 4:
        {
            console.log("Thursday")
            break;
        }
    case 5:
        {
            console.log("Friday")
            break;
        }
    case 6:
        {
            console.log("Saturday")
            break;
        }
    case 7:
        {
            console.log("Sunday")
            break;
        }
    default:
        {
            console.log("It's not a day");
        }
}