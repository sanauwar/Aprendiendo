//Using Currying
// const multiply = function (x, y) {
//     console.log(x * y)
// }
// const multiplyBy2 = multiply.bind(this, 2)
// multiplyBy2(5)
// const multiplyBy3 = multiply.bind(this, 3, 8)
// multiplyBy3()

//Using closures
const multiply = function x(a) {
    return function y(b) {
        console.log(a*b)
    }
}

const multiplyBy2 = multiply(5)
multiplyBy2(2)
