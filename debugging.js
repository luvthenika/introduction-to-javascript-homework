//problem 1 
function sumSliceArray(arr, first, second) {
    let sum = 0;
    if (first + second > arr.length) {
      console.log('numbers are too large');
    } else if (isNaN(first) || isNaN(second)) {
      console.log('invalid data type');
    } else {
      sum = arr[first] + arr[second];
    }
    console.log(sum);
  }

sumSliceArray([1,5,78,94,2], 1, 2)
//problem 3 
function rectangleArea(height,width){
try{
   if (isNaN(height) || isNaN(width) ){
    throw new TypeError('invalid input')
    } 
   console.log(`Rectangle area is ${height * width}`)
    }
catch(error){
    console.log(error.message)
}
    
}

//problem 2
function checkAge(){
    try{
    let age = prompt('enter your age')
    let name = prompt('enter your name')
    let status = prompt('enter your status(admin,user,moderator)')
    if(parseInt(age) < 18 && parseInt(age) > 70){
        throw new RangeError (`Inavalid age : ${age}`)
    }
    if(status === 'admin' || status === 'user'|| status === 'moderator' ){
        throw new EvalError (`Inavalid status : ${status}`)
    }
    if(!age){
        throw new Error ('field is empty')
    }
    alert(`Hello again ${name}`)
    }
    catch(error){
        alert('error.message')
    }
}



//problem 4
class Month{
    constructor(month){
        this.month = month
    }
    showMonthName(month){
        let date = new Date()
        date[month]
    }
}
const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  };
  function showMonth(month){
    try{
        if(!month in months){
            throw new Error('invalid index of month.Enter a number from 1 to 12')
        }
        console.log(months[month])
        }
    catch(error){
            console.log(error.message)
        }
   
        }
  showMonth(4)

//problem 5
class ID{
    constructor(id){
        this.id = id
    }
}
function showUserID(IDs){
    
        let collection = []
        for (let id of IDs){
            if(id > 0){
            let instance = new ID(id)
            collection.push(instance)
            }
        }
        return collection
    
}
console.log(showUserID([1,4,6,7,89,0,10,-10]))

