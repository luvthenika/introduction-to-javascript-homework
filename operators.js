//problem 2
let x = 1;
let y = 2;

let res1 ='x'+y
console.log(res1);
console.log(typeof res1);

let res2 = true + 'y'
console.log(res2); 
console.log(typeof res2); 

let res3 =Boolean(x+y)
console.log(res3);
console.log(typeof res3);

let res4 = // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""






//problem 3
let isAdult = prompt('How old are you?')
if(isAdult >= 18){
    alert('you have reached the age of adulthood')
}
else alert('You are too young :(')




//problem 4
let counter = {};
let nums = [1, 3, 8, 6, 6, 3, 4, 8, 2, 6, 4];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] in counter) {
    counter[nums[i]] += 1;
  } else {
    counter[nums[i]] = 1;
  }
}

let mostFrequentNum = 0;
let biggestCount = 0;

Object.entries(counter).forEach(([num, count]) => {
  if (count > biggestCount) {
    biggestCount = count;
    mostFrequentNum = num;
  }
});

let filtered = nums.filter(num => num !== Number(mostFrequentNum));
console.log(filtered);




//problem 5
let a = prompt("Enter side \u{1D5D4} of the triangle:")
let b = prompt("Enter side \u{1D5D5} of the triangle:")
let c = prompt("Enter side \u{1D5D6} of a triangle:")

//Heron's formula
let p=(a+b+c)/2
let triangleArea=Math.floor(Math.sqrt(p*(p-a)*(p-b)*(p-c)))
console.log(`Area of the triangle is approximately:${triangleArea}`)
console.log(`This triangle is ${a*a + b*b === c*c ? '' : 'not '}pythagorean`);
    


//problem 6
let date=new Date()
let hours=date.getHours()
if(hours>23 && hours<=5 ){
    console.log('Good night')
}
else if (hours >5 && hours<= 11 ){
    console.log('Good morning')
}
else if (hours >11 && hours<= 17 ){
    console.log('Good afternoon')
}
if(hours> 17 && hours <= 23 ){
    console.log('Good night')
}

