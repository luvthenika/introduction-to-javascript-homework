/*function myAjex(resolve,reject){
    const xhttp = new XMLHttpRequest()
    xhttp.onload = res // what is onload
    xhttp.open("GET",api,true)//??
    xhttp.send()//??
}
const myFetch = new Promise(myAjex)
myFetch.then(function(){
    //jSON.parse ?????
}) */

/*const { reject } = require("async");

const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };

  const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let inStock = order.every(item => inventory[item[0]] >= item[1]);
        if (inStock) {
          resolve(`Thank you. Your order was successful.`);
        } else {
          reject(`We're sorry. Your order could not be completed because some items are sold out.`);
        }
      }, 1000);
    })
  };

  checkInventory(['bags',4]).then(function(value){
    console.log(value)
  })
  
  // Write your code below:
  const myExecutor = (resolve,reject)=>{
    if(inventory.sunglasses > 0){
      resolve('Sunglasses order processed.')
    }
    else{
      reject('That item is sold out.')
    }
  }
  const orderSunglasses = () =>{
    return new Promise(myExecutor)
  }
  const orderPromise = orderSunglasses()
  console.log(orderPromise)

  //const promise = new Promise()
  //console.log(promise) undefined
  */

//problem 1
const getPromise = (message, delay) => new Promise((resolve,reject) => setTimeout(()=>message ? resolve(message): reject("message is missing."),delay))
getPromise('i am a noob at solving promises',5000).then((message)=> console.log(message)).catch((error)=>console.log(error))


//problem 2

function calcArrProduct(array) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] !== "number") {
        reject("array should contain only numbers")
      }
    }
    const product = array.reduce((a, b) => a * b, 1)
    resolve(`The array's product is ${product}`);
  });
}

calcArrProduct([1, 2, 3]).then((arraymessage) => {
  console.log(arraymessage);
}).catch((error) => {
  console.log(error)
})


const promiseForNumber = new Promise(function(resolve,reject){
  const promptInput = prompt("Enter a number:")
  if(typeof(promptInput) === "number"){
    resolve(promptInput)
  }
  reject("not a number")
})
promiseForNumber.then(function(value){console.log(value);},function(value){console.log(value); return value}).then("ENTER A NAME DUMMY")

