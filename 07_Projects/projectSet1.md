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

```


### project 3 code

```javascript

const clock = document.querySelector('#clock')
setInterval(()=>{
  const date = new Date();
  clock.innerHTML=date.toLocaleTimeString()
},1000)




```

