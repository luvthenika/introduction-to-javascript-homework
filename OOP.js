//problem 1
class Circle {
    constructor(x,y,r){
    this.x = x
    this.y = y
    this.r = r
    
    }

    calcCircleLength(){
        console.log(`Length of the circle: ${2 * 3.14 * this.r}`)
    }
    static returnLength(){
        return `Length of the circle: ${2 * 3.14 * this.r}`
    }
    copiedCircle(){
        console.log(this.circle)
    }
    static returnCircle(){
        return this.circle
    }
}
let circle = new Circle(0,0,5)


//problem 2
function propsCount(currentObject){
   let propertyCount = Object.keys(currentObject).length;
   console.log(propertyCount)
}

//problem 3
class Person{
    constructor(name,surname){
        this.name =  name
        this.surname = surname
    }
    showFullName(){
        console.log(this.name,this.surname)
    }
}
class Student extends Person{
    constructor(age,middleName){
        this.age = age
        this.middleName = middleName
    }
    showInfo(){
        console.log(`Student:${this.name,this.surname,this.middleName} Age:${this.age}`)
    }
}
let student = new Person('nika','chudyk')
student.showFullName()

//problem 
class Highlighter{
    constructor(shade,percentage){
        this.shade = shade
        this.percentage = percentage
    }
    outputText(string){
        console.log("%c" + string, `color: ${this.shade}`);
    }

}
let pinkHighlighter = new Highlighter('pink','46%')
pinkHighlighter.outputText('Nika is cool')