//Closures example

var a = 10;
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




