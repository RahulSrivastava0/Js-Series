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