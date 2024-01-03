// //declaration function
// function add(a, b) {
//     return a + b

// }
// console.log("addition:" + add(100, 10));

// //expression function
// let calSub = function (x, y) {
//     let z = x - y;
//     return z;
// }

// console.log("Subtraction : " + calSub(7, 4));

// //arrow function
// const addArrow = (a, b) => a + b;

// console.log("arrow addition:" + addArrow(2, 3));

//functions calling function
function bmi_output  (weight,height){
    return weight / height ** 2
}
   

function bmi_calc( user_weight,user_height){
    const user_bmi = bmi_output(user_weight,user_height)
     
    if (user_bmi <=18.0){
        return "your bmi is " + user_bmi + " you are in under weight😒😒😢 "
    }else if(user_bmi <=25.0){
        return "your bmi is " + user_bmi + " you are in healthy weight🥳👌 "
    }else if(user_bmi <=35.0){
        return "your bmi is " + user_bmi + " you are in over weight😧😨 "

    }else if (user_bmi >=35.0){
        return "your bmi is " + user_bmi + " you are in obesity weight😱 "

    }
}
console.log(bmi_calc(,1.71));