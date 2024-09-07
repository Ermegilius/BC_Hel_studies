let a = 123;

function myFunction1() {
    console.log("Global a is " + a);//at this point "var a" was already declared, but it still had no value. Instead "let a" wasn't declared yet.
    var a = 321;
    //let a = 321;
    //a = 321;
    console.log("Local1 a is " + a);
}

function myFunction2() {
    let a = 666;
    //a = 666;
    console.log("Local2 a is " + a);
}

myFunction1();
myFunction2();
console.log(a);