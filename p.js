function add2Numbers (a, b){

    var add = a+b;
   //console.log("The result is: ", add);
   return add ; 
}


var num1 = parseInt(prompt("Enter 1st Number"));
var num2 = parseInt(prompt("Enter 2nd Number"));

var output = add2Numbers(num1, num2); 
 console.log("The value returned from function is: ", output);