const checkAge = function(age){
let age_2 = 18 
let age_3 = 61
if (typeof age !== 'number'){
    return console.log('TypeError')
}if (age < age_2){
    return console.log('You don’t have access cause your age is ' + age + '. It’s less then.')
}else if (age_3 > age && age >= age_2){
    return console.log('Welcome!')
}else if (age > age_3){
    return console.log('Keep calm and look Culture channel.')
}else{
    return console.log('Technical work.')
}
}
age = +prompt()
checkAge(age)