//unordered list

const ulElement=document.createElement('ul')
ulElement.textContent="lipsticks"

const li1Element=document.createElement('li')
li1Element.textContent="lakme"

const li2Element=document.createElement('li')
li2Element.textContent="loreal"

ulElement.appendChild(li1Element);
ulElement.appendChild(li2Element);

console.log(ulElement);
 //adding to the body
document.body.appendChild(ulElement);