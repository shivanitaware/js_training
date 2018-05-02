function outerFunction () {
    const outer = `I see the outer variable!`
  
    function innerFunction() {
      console.log(outer)
    }
  
    return innerFunction
  }
  
let outer = outerFunction() // I see the outer variable!
console.log(outer)