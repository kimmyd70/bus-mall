'use strict';

//Global Variables
var products = [];

//DOM links

var picOneEl = document.getElementById ('product-pic-one');
var picTwoEl = document.getElementById ('product-pic-two');
var picThreeEl = document.getElementById ('product-pic-three');


//US #1 Display 3 unique (random) products
//Create constructor properties: product-name, image file path

function ProductAvailable (name, photo){
  this.productName = name;
  this.source = photo;

  this.clickCount = 0;
  this.showCount = 0;

  products.push (this);
}

//Instantiate products
new ProductAvailable('bag')


//Randomize and show 3 products (no doubles)

function randomIndex (max){
  return Math.floor(Math.random() * max);
}


//render side-by-side
//Attach event listener
//User pics favorite with click, repeat to var rounds = 25

//US #2 Track selections made to determine most picked
// Constructor property: clicked

//US #3 max 25 rounds of voting
//loop 25....use global variable for counter to easily replace
//remove listener

//US #4 view a report of results AFTER 25 votes
// Constructor property: shown to customer
//Display: productName, clickCount, showCount--in popular order--table?

var tableHead = 
