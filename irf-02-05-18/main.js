/*
function outerFunction () {
    const outer = `I see the outer variable!`
  
    return function innerFunction() {
      console.log(outer)
    }
  }
  
let outer = outerFunction() // I see the outer variable!
console.log(outer())


function secret () {
  let secretCode = "I'm greatest";
  return {
    saySecretCode: () => {
      console.log(secretCode)
    }
  }
}

const theSecret = secret()
theSecret.saySecretCode()


function logFunction() {
  console.log(this);
}

new logFunction(); // logs logFunction {}

 // Saves a NodeList of all list items on the page in listItems
 var listItems = document.querySelectorAll('ul li');
 // Loops through each of the Node in the listItems NodeList and logs its content
 for (var i = 0; i < listItems.length; i++) {
   (function () {
     console.log(this.innerHTML);
   }).call(listItems[i]);
 }


function a() {
  let a = 10
  function b() {
    console.log(a)
  }
}
a();

const person = { name: "Irfan" }

let greeting = function(a, b) {
  console.log(a + " " + b + " " + this.name)
}

greeting.call(person, "Hello", "Bro")



const person = { name: "Rakshith" }

let greeting = function(a,b) {
  console.log(a + " "+ b + " " + this.name)
}

greeting.apply(person, ["Hello","Bro"])



const person = {
  name: "Irfan",
  age: 24
}

let greeting = function(a, b) {
  console.log(a + " " + b + " " + this.name)
  console.log(this.age)
}

let bound = greeting.bind(person)

bound("Hello", "the Greatest")
*/

// function ab(c, d) {
//   console.log("hey" + " " + c + " " + d)
// }

// ab("Hello", "bro")

const person = {
  name: "shivani",
  age: 36,
  method: function() {
    console.log(this.age);
  }
}

person.method()
