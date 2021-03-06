function check(input){ 
if(Object.prototype.toString.call(input) === '[object Array]') { //check if the input is an array
    console.log( 'Array detected...' );
        var output = ''; //set space and var
        for (var z in input) { //loop through the array
         output += z + " " + typeof z + ": " + input[z] + "\n"; //build up output of array items and their values
        }
        console.log('array:' + output); //output findings
}

else if(input !== null && typeof input === 'object'){ //check if input is an object
    console.log('Object detected...') //signal detection
    console.log({input}); //print object as object
}
else if(typeof input === "function") {
    console.log('Function detected...') //signal detection
    var that = input.toString(); //turn function into string
    console.log(that); //output string information
}


else {
    console.log('Variable detected...') //signal detection
    if(typeof input === undefined){ //check if var is undefined
        console.log('Variable is undefined.');  //signal undefined variable
    }
    else {
        console.log('variable value: ' + input); //output variable value
    }
}

}
