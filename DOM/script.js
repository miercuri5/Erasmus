const element = document.getElementsByTagName("h1");
console.log(element);

const elementID = document.getElementById("notice")
console.log(elementID);

const elementClass = document.getElementsByClassName("title");
console.log(elementClass);

const h1 = document.querySelector('h1');
console.log(h1);

const h1ByClass = document.querySelector('.title');
h1.textContent = "Cambiado desde JS";