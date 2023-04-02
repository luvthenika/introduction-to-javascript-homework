//problem 1
const smallWindow = window.open('about:blank', 'New window', 'width=300,height=300');
smallWindow.setTimeout(function(){
    smallWindow.resizeTo(500,500)
    
},2000)
smallWindow.setTimeout(function(){
    smallWindow.moveTo(200,200)
},4000)

smallWindow.setTimeout(function(){
    smallWindow.close()
},6000)


// problem 3
const text = document.querySelector("p")
const button = document.querySelector("button")
button.addEventListener('click',function changeCSS(){
        text.style.color = "orange"
        text.style.fontSize = "20px"
        text.style.fontFamily = "Comic Sans MS"
})
//problem 2
    const styleBtn = [...document.querySelectorAll(".color")]
    const link = document.querySelector('a')

    styleBtn[0].addEventListener('click',()=>{
        document.body.style.backgroundColor = "blue"
    })
    styleBtn[1].addEventListener('dblclick',()=>{
        document.body.style.backgroundColor = "pink"
    })
    styleBtn[2].addEventListener('',()=>{
        document.body.style.backgroundColor = "pink"
    })
    link.addEventListener('mouseover',()=>{
        document.body.style.backgroundColor = "yellow"
    })
    link.addEventListener('mouseout',()=>{
        document.body.style.backgroundColor = "white"
    })





//problem 5

const livebtn = document.querySelector('.live-button')
const message = document.querySelector('#message')
livebtn.addEventListener('click', () => {
    message.innerHTML = 'I was pressed!';
  });
  
  livebtn.addEventListener('mouseover', () => {
    message.innerHTML = 'Mouse on me!';
  });
  
  livebtn.addEventListener('mouseout', () => {
    message.innerHTML = 'Mouse is not on me!';
  });
  
//problem 4
const selectElement = document.querySelector('.names')
const remover = document.querySelector('#option-remover')
remover.addEventListener('click',()=>{
    const selectedIndex = selectElement.selectedIndex
    selectElement.remove(selectedIndex)
})

//problem 7 
const countrySelector = document.querySelector("#country")
const citySelector = document.createElement("select")
countrySelector.addEventListener('change',()=>{
if(countrySelector[countrySelector.selectedIndex].value == "ger"){
    const cityOption1 = document.createElement("option")
    cityOption1.text = "Munich"
    citySelector.appendChild(cityOption1)
    document.body.appendChild(citySelector);
    console.log(countrySelector)
}
else if(countrySelector[countrySelector.selectedIndex].value == "usa"){
    const cityOption2 = document.createElement("option")
    cityOption2.text = "New York"
    citySelector.appendChild(cityOption2)
    document.body.appendChild(citySelector);
    console.log(countrySelector)
}
else if(countrySelector[countrySelector.selectedIndex].value == "ukr"){
    const cityOption3 = document.createElement("option")
    cityOption3.text = "Lviv"
    citySelector.appendChild(cityOption3)
    document.body.appendChild(citySelector);
    console.log(countrySelector)
}
})


//problem 6
const windowInfo = document.querySelector(".window-info")
window.addEventListener('resize',()=>{
    let width = window.innerWidth
    let height = window.innerHeight
    windowInfo.innerHTML = `Width : ${width}, height: ${height}`
})





