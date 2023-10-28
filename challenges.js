//1st challenge
const mark_weight = 48
const mark_height = 1.47
const john_weight = 85
const john_height = 1.90

const mark_bmi = mark_weight / mark_height ** 2
const john_bmi = john_weight / john_height ** 2

console.log("mark mass is:", mark_bmi)

console.log("john mass is:", john_bmi)

const mark_higher_bmi = mark_bmi > john_bmi

console.log(mark_higher_bmi)

//second challenge

if (mark_bmi > john_bmi) {
    console.log(`mark's BMI (${(mark_bmi)}) is higher than john's BMI (${john_bmi})`)

}
else {
    console.log(`john''s BMI ${john_bmi} is higher than mark's BMI ${mark_bmi}`)
}


