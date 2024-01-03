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

// let bill = prompt("enter a bill amount:")
// let tip = bill <= 300 && bill >= 50 
// //  ? bill * 0.15 : bill * 0.2
// var x = 0;
//  console.log(typeof(bill));
//  if  (tip){
//     x =  bill * 0.15
// }else{
//     x = bill * 0.2
// }

// console.log(`The bill amount  is ${bill} and the tip value is ${x} .The total amount ${Number(bill) + x}`);

// challenge 5

// const calc_average = (v1, v2, v3) => v1 + v2 + v3 / 3

// let dolphine_score = calc_average(100, 180, 19)
// let koalas_score = calc_average(45, 23, 100)

// function check_winner(avg_of_dolphine, avg_of_koalas) {
//     if (avg_of_dolphine >= 2 * avg_of_koalas) {
//         console.log(`dolphine win 🏆 (${(avg_of_dolphine)}) vs koalas (${(avg_of_koalas)})`);
//     } else if (avg_of_koalas >= 2 * avg_of_dolphine) {
//         console.log(`koalas win 🏆 (${(avg_of_koalas)}) vs dolphine (${(avg_of_dolphine)})`);
//     } else {
//         console.log("no team wins");
//     }
// }
// check_winner(dolphine_score, koalas_score)

// //test data 2
// dolphine_score = calc_average(1, 1, 1)
// koalas_score = calc_average(100, 100, 200)

// check_winner(dolphine_score, koalas_score)

// challenge 6

// const calctip = function(bill){
//     return  bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2
                               
// }

// const bill = [125,555,44]
 
// const tips = [calctip(bill[0]),calctip(bill[1]),calctip(bill[2])]

// let total = [bill[0]+tips[0],bill[1]+tips[1],bill[2]+tips[2]]

// console.log(bill ,tips,total); 

// challenge 7

const mark_miller= {
    name: "mark",
    weight:78,
    height:1.69,
    calc_bmi: function(){

       mark_miller.bmi= mark_miller.weight / mark_miller.height ** 2
       return mark_miller.bmi     
    }

    
}

const john_smith={
    name:"john",
    weight:92,
    height:1.95,
    calc_bmi: function(){

        john_smith.bmi= john_smith.weight / john_smith.height ** 2
        return john_smith.bmi
    }

}

if (mark_miller.calc_bmi() > john_smith.calc_bmi()){
    console.log(`${mark_miller.name} bmi(${mark_miller.calc_bmi()}) is greater than ${john_smith.name}'s bmi(${john_smith.calc_bmi()})`);
}else{
    console.log(`${john_smith.name}'s bmi(${john_smith.calc_bmi()}) is greater than ${mark_miller.name}'s bmi(${mark_miller.calc_bmi()})`);
}



