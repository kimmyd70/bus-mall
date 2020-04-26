'use strict';

//US #1 Display 3 unique (random) products
//Create constructor properties: product-name, image file path

function productAvailable (name, photo){
  this.productName = name;
  this.source = photo;

  this.clickCount = 0;
  this.showCount = 0;
}


//Randomize and show 3 products (no doubles)
//render side-by-side
//Attach event listener
//User pics favorite with click, repeat to var rounds = 25

//US #2 Track selections made to determine most picked
// Constructor property: clicked

//US #3 max 25 rounds of voting
//loop 25....use global variable for counter to easily replace
//remove listener

//US #4 view a report of results
// Constructor property: shown to customer
//Display: productName, clickCount, showCount--in popular order--table?

var tableHead = 
