// import { createCookie, readCookie } from './cookies.js';

let productsChoice = ['banana', 'apple', 'orange', 'cucumber', 'onion', 'carlic', 'patato'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let i;
let products = [];

for (i = 0; i < 5; i++) {
  products.push({
    id: random(100, 1000),
    product: productsChoice[random(1, productsChoice.length)],
    count: random(1, 10),
    price: random(1, 4),
    tax: 15,
  });
}

let shopArea = document.querySelector('.shop');
let box = '';
for (let item of products) {
  box += `<div class="item" id=${item.id}>
                    <h3>${item.product}</h3>
                    <p>Price: ${item.price}€</p>
                    <hr>
                    <p>Tax: ${item.tax}%</p>
                    <p>Count: ${item.count}  | <i>To pay brutto: </i> ${item.price * item.count + (item.price * item.count * 15) / 100}€</p>
                    <hr>
                    <button value="${item.id}" onclick="buyItem(this.value)" >By this</button>
                </div> `;
}

box += `<div > 
Busket:
<h3> Product: ${readCookie('product')}</h3>
<p>Count: ${readCookie('count')}</p>


</div> `;
shopArea.innerHTML = box;

// let item = document.querySelector('button');
// document.addEventListener('click', byItem);

function buyItem(value) {
  for (let item of products) {
    if (item.id == parseInt(value)) {
      createCookie('product', item.product);
      createCookie('count', item.count);
      return;
    }
  }
}
