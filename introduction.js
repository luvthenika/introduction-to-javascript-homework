alert('Chudyk')
let firstNumber = 10;
let secondNumber = 20;
alert(firstNumber)
alert(secondNumber)
secondNumber=firstNumber
alert(firstNumber)
alert(secondNumber)
let dataTypes = {
    'string':'hiiii',
    'number':1,
    'boolean':true,
    'undefined':undefined,
    'null':null
}
let checkAge= confirm('Are you an adult?');
console.log(checkAge);

let name='Veronica'
let surname='Chudyk';
let course='Javascript Fundmanetals'
let birthYear=2004;
let familyState=false
console.log(typeof(birthYear),typeof(surname),typeof(familyState),typeof(undefined),typeof(null))

let email=prompt("Enter your email",'nika@');
let password=prompt("Enter your password",'Waesfw#@2')
alert(`Dear User,your email is ${email} and your password is ${password}`)
 
//let's assume there are 40 seats in compartment; 10 sections and 4 seats in each one;
let userNum=prompt('enter your ticket number:')
if(userNum >= 1 && userNum <= 36){
    let section=Math.ceil(userNum/4)
    console.log(`your section is ${section}`)
    if(section%4==0){
        console.log('your seat is top')
    }
    else
        console.log('your seat is bottom')
    
}

