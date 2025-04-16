function foo() {
    // 'use strict' // foo,bar의 this -> undefined
    console.log("foo's this: ", this); //window
    function bar() {
        console.log("bar's this: ", this); //window
    }
    bar();
}
foo();