function x() {
    var a = 30
    function y() {
        var b = 20;
        console.log(a)
    }
    a = 100
    return y;
}
let z = x();//Execution context of x is completely gone 

z()//But it still remembers its lexical scope

function gParent() {
    let a = 10;
    function parent() {
        let b = 50;
        function child() {
            console.log(a, b)
        }
        child()
    }
    parent()
}
gParent()