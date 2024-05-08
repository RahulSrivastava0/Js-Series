const accountId= 12345
let accountEmail= "srivastava@gmail.com"
var accountPassword= "124578"
accountCity="jaipur"

/*
    we should never use var as it has function and block error 
*/ 
console.table([accountId,accountEmail,accountPassword,accountCity])

accountEmail="rahul@gmail.com"
accountPassword="78452"
accountCity="Bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity])