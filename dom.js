//using getElementById
let pElement=document.getElementById('demo');

//once we get the element then only accessthe etcet content
let pText=pElement.textContent;
console.log(pText);//hello world

//the old value of pElement will be overridden
console.log(pElement);

//adding another element
pElement.textContent="hi evereyone";
console.log(pElement.textContent);
console.log('=======');

//using query selector(id,.classname,tag tagname)
let testElement=document.querySelector(".test");
console.log(testElement.testContent);
console.log('=======');
