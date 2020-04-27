'use strict';

//Global Variables
var products = [];

//DOM links

var picOneEl = document.getElementById ('product-pic-one');
var picTwoEl = document.getElementById ('product-pic-two');
var picThreeEl = document.getElementById ('product-pic-three');

var sectionEl = document.getElementById('product-display');


//US #1 Display 3 unique (random) products
//Create constructor properties: product-name, image file path

function ProductAvailable (name, source){
  this.productName = name;
  this.photo = source;

  this.clickCount = 0;
  this.showCount = 0;

  products.push (this);
}

//Instantiate products
new ProductAvailable('Baby Sweep', './images/baby-sweep.png');
new ProductAvailable('Banana Slicer', './images/banana-slicer.jpg');
new ProductAvailable('Tablet Holder', './images/bathroom-tablet.jpg');
new ProductAvailable('Rain Boots', './images/boots.jpg');
new ProductAvailable('Breakfast Maker', './images/breakfast-maker.jpg');
new ProductAvailable('Chair', './images/chair.jpg');
new ProductAvailable('Cthulhu', './images/cthulhu.jpg');
new ProductAvailable('Dog Duck', './images/dog-duck.jpg');
new ProductAvailable('Dragon Meat', './images/dragon-meat.jpg');
new ProductAvailable('Meatball Bubblegum', './images/meat-bubblegum.jpg');
new ProductAvailable('Octo USB', './images/octo-usb.gif');
new ProductAvailable('Pet Sweep', './images/pet-sweep.jpg');
new ProductAvailable('Pizza Scissors', './images/pizza-scissors.jpg');
new ProductAvailable('R2D2 Carryon', './images/R2D2-bag.jpg');
new ProductAvailable('Shark Sleeping Bag', './images/shark.jpg');
new ProductAvailable('TaunTaun Sleeping Bag', './images/tauntaun.jpg');
new ProductAvailable('Unicorn Meat', './images/unicorn-meat.jpg');
new ProductAvailable('Utensil Pens', './images/utensil-pen.jpg');
new ProductAvailable('Watering Can', './images/water-can.jpg');
new ProductAvailable('Wine Glass', './images/wine-glass.jpg');



//Randomize
function randomIndex (max){
  return Math.floor(Math.random() * max);
}

// ...and show 3 products (no doubles) side by side; update show Count

function display(){
  var index1 = 0;
  var index2 = 0;
  var index3 = 0;

  //while ((index1 === index2) || (index1 === index3) || (index2 === index3)){
    index1 = randomIndex(products.length);
    index2 = randomIndex(products.length);
    index3 = randomIndex(products.length);
  //}
  //set images to be displayed
  picOneEl = products[index1].src;
  picTwoEl = products[index2].src;
  picThreeEl = products[index3].src;

  //set titles
  picOneEl.title = products[index1].name;
  picTwoEl.title = products[index2].name;
  picThreeEl.title = products[index3].name;

  products[index1].showCount++;
  products[index2].showCount++;
  products[index3].showCount++;
}

//US #2 Track selections made to determine most picked
//handler function; update clicks; displays 3 new products
function handleChoice(event){
  var chosenProduct = event.target.title;
  for (var i = 0; i , products.length; i++){
    if (chosenProduct === products[i].name){
      products[i].clickCount++;
    }
  }
  display();
}

//Attach event listener
//User pics favorite with click, repeat to var rounds = 25
sectionEl.addEventListener('click', handleChoice);


//US #3 max 25 rounds of voting
//loop 25....use global variable for counter to easily replace
//remove listener

//US #4 view a report of results AFTER 25 votes
// Constructor property: shown to customer
//Display: productName, clickCount, showCount--in popular order--table?
