# Projects related to DOM

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-iv2bqh?file=index.html)

# solution code

## project 1 code

```javascript
const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');
console.log(btn);
//you get a node-list

btn.forEach((button) => {
  button.addEventListener('click', (e) => {
    //console.log(e)
    // console.log(e.target) basically tells kis target se yeh event aaya h(click se aaya h)
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
      // console.log(e.target)
    }
    if (e.target.id === 'white') body.style.backgroundColor = e.target.id;
    if (e.target.id === 'blue') body.style.backgroundColor = e.target.id;
    if (e.target.id === 'yellow') body.style.backgroundColor = e.target.id;
  });
});


```


## project 2 code

```javascript

// weight(in kg)/height in m*2

const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results')
  if(height===''||height<0||isNaN(height)){
    result.innerHTML=`pls give a valid height ${height}`
  }else if(weight===''|| weight<0 || isNaN(weight)){
    result.innerHTML=`pls give a valid weight ${weight}`
  }
  else{
    const bmi = (weight/((height*0.01)*(height*0.01))).toFixed(2)
    result.innerHTML=`<span>${bmi}</span>`

    const weightGuide = document.querySelector('#weight-guide')
  const child2 = weightGuide.children[2]
  const child1= weightGuide.children[1]
  const child3= weightGuide.children[3]

  if(bmi<18.6){
     weightGuide.children[1].style.color='red'
     child2.remove();
     child3.remove();
  }
  if(bmi>=18.6&&bmi<=24.9){
    weightGuide.children[2].style.color='red'
    child1.remove()
    child3.remove()
  }
  if(bmi>24.9){
  weightGuide.children[3].style.color='red'
  child1.remove()
  child2.remove();
  }
  }
})


```


### project 3 code

```javascript

const clock = document.querySelector('#clock')
setInterval(()=>{
  const date = new Date();
  clock.innerHTML=date.toLocaleTimeString()
},1000)




```


### project 4 code

```javascript

let randomNumber = Math.floor(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
let inputUser = document.querySelector('#guessField');
let previousGuess = document.querySelector('.guesses');
let guessRemaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
let resultParas = document.querySelector('.resultParas');
const first = resultParas.firstChild;
const second = resultParas.lastChild;
let prevguess = []; //for showing that user does not enter duplicate value
let count = 1;
let playGame = true;
let p = document.createElement('p');

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(inputUser.value);
    validate(guess);
  });
}

function validate(guess) {
  if (guess < 1) {
    alert('please enter a number greater then 1');
  } else if (guess > 100) {
    alert('please enter a number less then 100');
  } else if (guess === '' || isNaN(guess)) {
    alert('please enter a valid number');
  } else {
    prevguess.push(guess);
    if (count === 11) {
      displayGuess(guess);
      displayMessage(`Game over, random no is ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    {
      lowOrHigh.innerHTML = `congrats you are winner`;
      endGame();
    }
  } else if (guess < randomNumber) {
    lowOrHigh.innerHTML = `value is too low`;
  } else if (guess > randomNumber) {
    lowOrHigh.innerHTML = `value is too high`;
  }
}

function displayGuess(guess) {
  inputUser.value = ''; //we empty the input box
  count++;
  previousGuess.innerHTML += `${guess} `; //one by one value display
  guessRemaining.innerHTML = `${11 - count}`;
  // count++;
  // previousGuess.innerHTML=`<span>${prevguess }</span>`
  // guessRemaining.innerHTML=`<span>${11-count}</span>`
}
function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  inputUser.value = '';
  inputUser.setAttribute('disabled', '');
  p.classList.add('button'); //acts as a button class
  p.innerHTML = `<h2 id='newGame'>Start a new Game</h2>`;
  resultParas.appendChild(p);
  playGame = false;
  startOver();
}
function startOver() {
  const h2 = document.querySelector('#newGame');
  h2.addEventListener('click', (e) => {
    count = 1;
    prevguess = [];
    randomNumber = Math.floor(Math.random() * 100 + 1);
    inputUser.removeAttribute('disabled');
    guessRemaining.innerHTML = `${11 - count}`;
    previousGuess.innerHTML = '';
    resultParas.removeChild(p);
    playGame = true;
  });
}





```
### project 5 code

```javascript

const insert = document.getElementById('insert');
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`<div>
  <table>
   <tr>
     <td>key</td>
     <td>keyCode</td>
     <td>hexCode</td>
   </tr>
   <tr>
   <td>${e.key===' '?'Space':e.key}</td>
   <td>${e.keyCode}</td>
   <td>${e.code}</td>
   
 </tr>
  </table>
  <div>`
})




```

### project 6 code

```javascript

//generate random color
function generateHexColor(){
  let hex='0123456789ABCDEF'
  let color = '#'
  for(i=0;i<6;i++)
   {
     color+=hex[Math.floor(Math.random()*16)];
   }
   return color;
}
function displayColor(){
  color = generateHexColor()
  document.body.style.backgroundColor=color;
}
let reference;
document.getElementById('start').addEventListener('click',(e)=>{
  if(!reference){ //if reference is null then call setInterval
    reference=setInterval(displayColor,1000)
  }
 
})

document.getElementById('stop').addEventListener('click',(e)=>{
  clearInterval(reference)
  reference=null //memory utilisation
})





```

