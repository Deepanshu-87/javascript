# Projects related to DOM

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-iv2bqh?file=index.html)

# solution code

## project 1

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