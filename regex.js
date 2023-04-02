/*RegExp.test(String) // return true or false / test is method of regex
const regPin = /^\d{4}$/ // \d = [0123456789] = [0-9]
const pin1 = '1111'
console.log(pin1)
String.match(regex)// returns array || null; for searching f.e. numbers of sth or words
const slide = "dhhhdduieiruue4882882hfbvavvavavavagdy868480033847\d \D \w \W \s \S"
//metacharacters = backslash \ and one symbol

// екранування (захистити) // /.- шукає крапку 
String.replace()// replace is a string method

const jusrReg = /\[.+\]/
*/
function counter(name,start = 0){
        let count = start;
        return function(){
            count+=1
            return count
        }
        
}
console.log(counter("counter1"))
console.log(counter("counter2"))