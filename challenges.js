// //1st challenge
// const mark_weight = 48
// const mark_height = 1.47
// const john_weight = 85
// const john_height = 1.90

// const mark_bmi = mark_weight / mark_height ** 2
// const john_bmi = john_weight / john_height ** 2

// console.log("mark mass is:", mark_bmi)

// console.log("john mass is:", john_bmi)

// const mark_higher_bmi = mark_bmi > john_bmi

// console.log(mark_higher_bmi)

// //second challenge

// if (mark_bmi > john_bmi) {
//     console.log(`mark's BMI (${(mark_bmi)}) is higher than john's BMI (${john_bmi})`)

// }
// else {
//     console.log(`john''s BMI ${john_bmi} is higher than mark's BMI ${mark_bmi}`)
// }


// //third challenge
// const dolphine_score=(100 + 180 + 19) / 3
// const koalas_score=(100 + 180 + 80) / 3
// console.log(dolphine_score);
// console.log(koalas_score);

// if(dolphine_score > koalas_score && dolphine_score >= 100){
//     console.log('dolphine won the game🥳🥳');

// }else if (koalas_score > dolphine_score && koalas_score >= 100){
//     console.log('koalas won the game🥳🥳');

// }else if(koalas_score == dolphine_score && koalas_score >= 100 && dolphine_score >= 100){
//     console.log('both are won the game🥳🥳');
// }else{
//     console.log('no one won the game😒😒');
// }

// challenge 04

let bill = prompt("enter a bill amount:")
let tip = bill <= 300 && bill >= 50 
//  ? bill * 0.15 : bill * 0.2
var x = 0;
 console.log(typeof(bill));
 if  (tip){
    x =  bill * 0.15
}else{
    x = bill * 0.2
}

console.log(`The bill amount  is ${bill} and the tip value is ${x} .The total amount ${Number(bill) + x}`);
