
// // function squre(y){
// //     let x=5
// //     n=x**y
// //     return n
// // }
// // squre(2)
// // console.log(n)

// //primitive number data type
// let number = 11
// console.log(number);
// console.log(typeof number);

// //primitive string data type
// let string = "sakthi"
// console.log(string);
// console.log(typeof string);

// //primitive boolean data type
// let boolean = true
// console.log(boolean);
// console.log(typeof boolean);

// //primitive undifined data type
// let difine;
// console.log(typeof difine);

let bill = prompt("enter a bill amount:")
let tip = bill <= 300 && bill>=50 
if (tip=true){
    console.log(bill * 0.15);
}else{
    console.log(bill * 0.2);
}
console.log(`The bill amount  is ${bill} and the tip value is ${tip} .The total amount ${bill + tip}`);






