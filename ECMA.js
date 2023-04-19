/*const sum = (...tiktak)=> tiktak.reduce((prev,cur)=> prev + cur)
console.log(sum(1,3,45,5,67,1,88,9,999,))
const sumOrMulti = function(type, ...elements){
    if(type === "+"){
        return elements.reduce((prev,cur)=> prev + cur)
    }
}*/


/*const logSum = (...numbers) => numbers.reduce((prev, cur) => prev + cur)
console.log(logSum(12, 34, 5, 67, 8, 9, 10, 67))

const cities = {
    ukraine: "kyiv",
    america: "nEWW YORK"
}
const { ukraine, america } = cities // undefined because we set key and its value is empty , consequently undefined
console.log(ukraine)// undefined because
console.log(america)
console.log(cities.ukraine) */


//problem 1
let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
};
const { first: f, second: s, third: th, fourth: frth } = names
console.log(f, s, th, frth)

//problem 2
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};
const { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4]} = data
console.log(name1, name2, age4)

//problem 3
let product = 1
function mul(...nums) {
    for (let num of nums) {
        if (typeof (num) === "number") {
            product *= num
        }
    }
    return product
}
console.log(mul(true, false, "str", 1, 3, 46))

//problem 3  compact way of solving 
const multiply = (...nums) => nums.reduce((product, num) => { if (typeof (num) === "number") { product *= num } return product })
console.log(multiply(true, false, "str", 1, 3, 46))



// problem 4 bind method is udes to borrow obejcts' methods adn set them to another object without copying that method. it is called borrowing
let server = {
    data: 0,
};
 let client = {
    server: server,
    result: "",
    calc: function (data) {
       this.server.data = data;
       this.server.convertToString(this.notification());
    },
    notification: function () {
       return (function (callback) {
          this.result = callback();
       }).bind(this);
    }
 };
 client.calc(123);
 server.displayData()
 console.log(client.result); // "123"
 console.log(typeof client.result); // "string"


//problem 6
var arr = [];

for (let i = 0; i <= 2; i++) {
   arr[i] = function () {
      console.log(i);
   };
}
console.log(arr.length) 
console.log(arr)

//const timer = (str)=> function(str){for (let smallstr of str){setInterval((smallstr)=>console.log(smallstr)),1000}}
/*function timer(bigstring){
    for(let letter of bigstring){
        setInterval(()=>{
            console.log(letter)
        },4000)
        console.log(letter)
    }

}
timer("nk") */

const cinema = {
    moviename : "cinderella",
    show : function(){
        console.log(this.moviename)
    }
}
cinema.show()
