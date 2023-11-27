//declaration function
function add(a, b) {
    return a + b

}
console.log("addition:" + add(100, 10));

//expression function
let calSub = function (x, y) {
    let z = x - y;
    return z;
}

console.log("Subtraction : " + calSub(7, 4));

//arrow function
const addArrow = (a, b) => a + b;

console.log("arrow addition:" + addArrow(2, 3));



