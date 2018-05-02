//Closures example

/*var a = 10;
function outer(){
    var b = 20;
    var inner = function(){
        a++;
        b++;
        console.log(a);
        console.log(b);
    }
    return inner;
}

var innerFn = outer();
innerFn();

var innerFn = outer();
innerFn();


// closures - fn remembers scope chain 

"use strict";
class User {
    logName() {
        console.log(this);
    }
}

(new User).logName(); 

//example

function greet() {
     name = "shivani";
     

    return function(){
        console.log('Hi ' +name);
        
    }
}

greet();

greetletter = greet();

greetletter();

//pvt public way in js - using module pattern .1st way - Use IIFE 2nd- module pattern
// Module pattern 

var Module = (function() {
    function privateMethod() {
        var a = 10;
        console.log(a);
       
    }

   

    return {
        publicMethod: function() {
            var a = 10;
            console.log(a);
        }
    };

})();

Module.publicMethod(); //This gives 10 as output
Module.privateMethod();//Private functions are those which are not returned
// return statement only contains public functions.The functions which are not returned are inaccessible
  // outside module space 

*/
  //bind

  /*const obj = {
      name:  'shivani',
      age : 24


  }


let student = function(a, b) {
    console.log(a + " " +this.name + b +" " +this.age);
}

var temp = student.bind(obj);
temp("hello", "is");
*/

//BIND
/*const obj = {
    name: 'ge',
    age : 45
}

var t = function (a ,b){
    console.log(a + " "+ this.name + " " +this.age);
}

var temp = t.bind(obj);  //func inside temp

temp("hello","bee");  // called func


*/

//call

/*const obj = {
    name: 'gea',
    age : 45
}

var t = function (a ,b){
    console.log(a + " "+ this.name + " " +b+ " " + this.age);
}

t.call(obj,"hello","aged"); */

//apply
const obj = {
    name: 'gea',
    age : 45
}

var t = function (a ,b){
    console.log(a + " "+ this.name + " " +b+ " " + this.age);
}

t.apply(obj,["hello","dear"]);

