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
*/
 // Saves a NodeList of all list items on the page in listItems
 var listItems = document.querySelectorAll('ul li');
 // Loops through each of the Node in the listItems NodeList and logs its content
 for (var i = 0; i < listItems.length; i++) {
   (function () {
     console.log(this.innerHTML);
   }).call(listItems[i]);
 }
