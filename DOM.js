//problem 1
const items = document.querySelectorAll('.point')
alert(items[0].innerHTML)
alert(items[items.length - 1].innerHTML)
alert(items[1].innerHTML)
alert(items[2].innerHTML)
alert(items[3].innerHTML)











//problem 2
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('h1');
    const paragraphs = document.querySelectorAll('p');

    header.style.fontSize = '40px'
    header.style.backgroundColor = 'green'

    for (let i = 0; i < paragraphs.length; i++) {
      const paragraph = paragraphs[i];
      paragraph.style.fontSize = '20px'
      if (i === 0) {
        paragraph.style.fontWeight = 'bold';
      }
      if (i === 1) {
        paragraph.style.color = 'red';
      }
      if (i === 2) {
        paragraph.style.textDecoration = 'underline';
      }
      if (i === 3) {
        paragraph.style.fontStyle = 'italic';
      }
    }
  });

  
  const listPoints = document.querySelector('ul')
 
  listPoints.style.listStyleType = 'none'

  const span = document.querySelector('span')
  span.style.opacity = '0'

//problem 3
let body = document.createElement('body')
document.documentElement.appendChild(body)

let main = document.createElement('main')
body.appendChild(main)

let div = document.createElement('div')
main.appendChild(div)

let p = document.createElement('p')
div.appendChild(p)
p.innerHTML = 'first paragraph'

//problem 4
const formData = [];
const submitBtn = document.querySelector('.btn');

submitBtn.addEventListener('click', function() {
  const values = document.querySelectorAll('.value');
  values.forEach(item => formData.push(item.value));
  console.log(formData);
});

// problem 5
const circles = document.querySelectorAll('.circle')
let animations = Array.from(circles).map(circle => circle.getAttribute('data-anim'))
console.log(animations)
for(let circle of [...circles]){
  for(let anim of animations){
    circle.classList.add(anim)
  }
}







//problem 6
const buttons = document.querySelectorAll('.color')
 const price = document.querySelector('#outprice')
const backgroundCard = document.querySelector('.shoeBackground')
let activeButton = null
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('red')) {
      price.innerHTML = '200.99$';
      
    } else if (button.classList.contains('green')) {
      price.innerHTML = '180.50$';
    } else if (button.classList.contains('orange')) {
      price.innerHTML = '190.50$';
    }
    else if (button.classList.contains('black')) {
      price.innerHTML = '140.25$';
    } else if (button.classList.contains('blue')) {
      price.innerHTML = '150.00$';
    }
      if(activeButton){
    activeButton.classList.remove('active')
  }
  button.classList.add('active');
    activeButton = button;
  });

}); 
