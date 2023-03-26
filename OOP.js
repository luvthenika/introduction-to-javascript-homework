//problem 1 undone
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
class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  
    showFullName() {
      console.log(`${this.name} ${this.surname}`);
    }
  }
  
  class Student extends Person {
    constructor(name, surname, middleName,course) {
      super(name, surname)
      this.middleName = middleName
      this.course = course
    }
  
    showFullName() {
      super.showFullName();
      console.log(`Student: ${this.name} ${this.surname} ${this.middleName}`)
    }
    showCourse(course){
        console.log(`Course: ${this.course} `)

    }
  }
  
  let student = new Student("Nika", "Chudyk", "Ben")
  student.showFullName()
  student.showCourse(4)

//problem 4 undone
let black = 'black'
class Highlighter{
    constructor(shade,percentage){
        this.shade = shade
        this.percentage = percentage
    }
    outputText(string) {
  //console.log("%c" + string, `color: ${this.shade}`);
  for (let i = 0; i < string.length; i++) {
    if (this.percentage >= string.length * 0.5) {
      console.log("%c" + string[i], `color: ${this.shade}`);
      this.percentage -= 0.5;
    } else {
      console.log("%c" + string[i], `color: black`);
    }
  }
}

}
let pinkHighlighter = new Highlighter('pink','3')
pinkHighlighter.outputText('Nika')


//problem 5 undone
class Worker{ 
    #experienceRatio = 1.2
    constructor(fullName,dayRate,workingDays){
        this.fullName = fullName
        this.dayRate = dayRate
        this.workingDays = workingDays
    
    }
    showSalary(){
        console.log(`${this.dayRate * this.workingDays}`)
    }
    get experienceRatio(){
        return this.experience
    }
    set experienceRatio(value){
        value = this.#experienceRatio
        return value
    }
    increasedSalary(){
        console.log(this.#experienceRatio * this.dayRate * this.workingDays)
    }
}
let developer = new Worker('ben',1000,20)
developer.showSalary()
developer.increasedSalary()





