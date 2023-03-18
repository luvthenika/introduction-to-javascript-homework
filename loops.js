//problem 1
let objectCount = {};
let compacted = []
function compact(arr){
    arr.forEach((item=>{
        objectCount[item] = true
    }))
    for(let unique in objectCount){
        compacted.push(unique)
    }
    console.log(compacted)
}

//problem 2
let range = []
function createArray(start,end){
    if(start < end){
        for(let i = start; i <= end; i++){
                range.push(start)
                start++
        }
    }
    else if(start > end){
            for(let i = start; i >= end; i--){
                    range.push(start)
                    start--
            }
    }
    else if(start === end){
        range.push(start)
    }
    console.log(range)
}
createArray(8,4)

//problem 3 ?????


//problem 4
let randomNums = []
function randArray(k){
        for(let i = 0; i < k; i++){
            let random = Math.floor(Math.random()*5000)
            randomNums.push(random)
            
        }
        console.log(randomNums)
}
randArray(4)
//problem 5
let string = []
let number = []
let bool = []
function sortTypes(array){
        array.forEach(el => {
            if(typeof el === 'number'){
                number.push(el)
            }
            if(typeof el === 'string'){
                string.push(el)
            }
            if(typeof el === 'boolean'){
                bool.push(el)
            }
        });
        console.log([string,number,bool])
}
//probelm 6
let result 
function calc(a,b,op){
    if(op === 1){
        result = a - b
    }
    else if (op === 2){
        result = a * b
    }
    else if(op === 3){
        result = a / b
    }
    else{
        result = a + b
    }
    console.log(result)
}
calc(14,7,3)

//problem 7 ????
