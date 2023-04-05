/* урок 
RegExp.test(String) // return true or false / test is method of regex
const regPin = /^\d{4}$/ // \d = [0123456789] = [0-9]
const pin1 = '1111'
console.log(pin1)
String.match(regex)// returns array || null; for searching f.e. numbers of sth or words
const slide = "d847\d \D \w \W \s \S"
//metacharacters = backslash \ and one symbol

// екранування (захистити) // /.- шукає крапку 
String.replace()// replace is a string method

const jusrReg = /\[.+\]/

function counter(name, start = 0) {
  let count = start;
  return function () {
    count += 1
    return count
  }

}*/



//problem 1
const capitalizedRegex = /^[A-Z]/
if (capitalizedRegex.test("Nika")) {
  console.log("String starts with uppercase character")
} else {
  console.log("String does not start with uppercase character")
}
//problem 2
const emailRegexx = /^[a-zA-z]+\d+@[A-Za-z]+\.[A-Za-z]+$/
const regexStatus = emailRegexx.test("nika666@gmail.com")
console.log(regexStatus)

//problem 3 ??

//problem 4
const cardRegex = /^(\d{4})\-(\d{4})\-(\d{4})\-(\d{4})$/

//problem 5 

const regexEmail = /^([a-zA-Z]\w*([-_]\w+)?)@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
function validateEmail(email) {
  if (regexEmail.test(email)) {
    console.log("Email is correct!")
  }
  else {
    console.log("Email is NOT correct!")
  }

}
validateEmail("be_b@gmail.com")


//problem 6 ???
const loginNumbers = /[-]?[0-9]+(\.[0-9]+)?/

  function check(login) {

  


  }

const fullNameInput = document.querySelector("#fullName")
const fullNameValue = fullNameInput.value
const emailInput = document.querySelector("#email")
const emailValue = emailInput.value
const phoneInput = document.querySelector("#phone")
const phoneValue = phoneInput.value
const passwordInput = document.querySelector("#password")
const passwordValue = passwordInput.value
const confirmPasswordInput = document.querySelector("#confirmPassword")
const confirmPasswordValue = confirmPasswordInput.value

const fullNameRegex = /^(?=[A-Za-z]+)\s(?=[A-Za-z]+)$/
const emailRegex = /^([a-z]+)(\d+)@[gmail]\.[com]/
const phoneNumberRegex = /^\+(\d{2})\-{1}(\d{3})\-{1}(\d{3})\-(\d{3})\-(\d{2})(\d{2})$/
const passwordRegex = /^(?=.*[A-Z]+.*)(?=[0-9]+.*)(?=[a-z].*).{8,}/


fullNameInput.addEventListener("input", () => {
  
  if (fullNameRegex.test(fullNameValue)) {
    console.log("Valid full name");
  } else {
    console.log("Invalid full name");
  }
});

// Validate email input
emailInput.addEventListener("input", () => {
  
  if (emailRegex.test(emailValue)) {
    console.log("Valid email");
  } else {
    console.log("Invalid email");
  }
});

// Validate phone number input
phoneInput.addEventListener("input", () => {
  
  if (phoneNumberRegex.test(phoneValue)) {
    console.log("Valid phone number");
  } else {
    console.log("Invalid phone number");
  }
});

// Validate password input
passwordInput.addEventListener("input", () => {
  const passwordValue = passwordInput.value;
  if (passwordRegex.test(passwordValue)) {
    console.log("Valid password");
  } else {
    console.log("Invalid password");
  }
});

// Validate confirm password input
confirmPasswordInput.addEventListener("input", () => {
  if (passwordValue !== confirmPasswordValue) {
    console.log("Passwords do not match")
  } else {
    console.log("Passwords match")
  }
})