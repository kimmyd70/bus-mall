'use strict';

//Global Variables
var products = [];
var votingRounds = 25; //control how long user clicks to vote
//DOM links for display

var picOneEl = document.getElementById ('product-pic-one');
var picTwoEl = document.getElementById ('product-pic-two');
var picThreeEl = document.getElementById ('product-pic-three');

var sectionEl = document.getElementById('product-display');


//old link for sentence output
//var resultsSection = document.getElementById('results');

//US #1 Display 3 unique (random) products
//Create constructor properties: product-name, image file path

function ProductAvailable (name, src, clickCount = 0, showCount = 0){
  this.name = name;
  this.src = src;
  this.alt = name;
  this.title = name;

  this.clickCount = clickCount;
  this.showCount = showCount;

  products.push(this);
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
// repeat for global var votingRounds = # times

//new US: no showing same thing in 2 subsequent rounds before display

//set cache
var chosenArr = [];

function display(){
  if (votingRounds > 0){

    //pick initial numbers
    var index1 = randomIndex(products.length);
    var index2 = randomIndex(products.length);
    var index3 = randomIndex(products.length);

    //check for duplicate in same round
    while ((index1 === index2) || (index1 === index3) || (index2 === index3)){
      index1 = randomIndex(products.length);
      index2 = randomIndex(products.length);
      index3 = randomIndex(products.length);
    }

    //now that we have 3 unique in this round
    //check and replace if any of index 1,2,3 are already in chosenArr

    var duplicate = chosenArr.includes(index1); //declare and check index1

    while (duplicate === true){
      index1 = randomIndex(products.length); //pick a new number
      duplicate = chosenArr.includes(index1); //re-eval index1
    }

    duplicate = chosenArr.includes(index2); //check index2

    while (duplicate === true){
      index2 = randomIndex(products.length); //pick new number
      duplicate = chosenArr.includes(index2); //re-evaluate index2
    }

    duplicate = chosenArr.includes(index3); //check index3

    while (duplicate === true){
      index3 = randomIndex(products.length); //pick new number
      duplicate = chosenArr.includes(index3); //re-eval index3
    }

    //Final check to see if deconflicted indices have been set to duplicate in this round
    while ((index1 === index2) || (index1 === index3) || (index2 === index3)){
      index1 = randomIndex(products.length);
      index2 = randomIndex(products.length);
      index3 = randomIndex(products.length);
    }

    //set chosenArr values for this round
    chosenArr[0] = index1; //set unique index1 in cache
    chosenArr[1] = index2; //set unique index 2 in cache
    chosenArr[2] = index3;// set unique index3 in cache

    //set images to be displayed
    picOneEl.src = products[index1].src;
    picTwoEl.src = products[index2].src;
    picThreeEl.src = products[index3].src;

    //set titles and alts
    picOneEl.title = products[index1].name;
    picTwoEl.title = products[index2].name;
    picThreeEl.title = products[index3].name;

    picOneEl.alt = products[index1].name;
    picTwoEl.alt = products[index2].name;
    picThreeEl.alt = products[index3].name;

    products[index1].showCount++;
    products[index2].showCount++;
    products[index3].showCount++;
  }
  else {
    end();
  }
}

//US #2 Track selections made to determine most picked
//handler function; update clicks; displays 3 new products
function handleChoice(event){
  var chosenProduct = event.target.title;
  for (var i = 0; i < products.length; i++){
    if (chosenProduct === products[i].name){
      products[i].clickCount++;
    }
  }
  display();
  votingRounds--;
}



//US #3 max 25 rounds of voting then remove listener
//display first 3 then start the event listener to start product display

function start (){
  picOneEl.src = './assets/bus-mall-logo.png';
  picTwoEl.src = './assets/bus-mall-logo.png' ;
  picThreeEl.src = './assets/bus-mall-logo.png';

  sectionEl.addEventListener('click', handleChoice);
}

function end (){
  picOneEl.src = './assets/bus-mall-logo.png';
  picTwoEl.src = './assets/bus-mall-logo.png' ;
  picThreeEl.src = './assets/bus-mall-logo.png';

  sectionEl.removeEventListener('click', handleChoice);
  renderChart();

  //previous user story with sentence outputs
  //results();
}

//US #4 view a report of results AFTER 25 votes
//Display: productName, clickCount, showCount in sentence

// function results(){
//   var result = '';
//   for (var i = 0; i < products.length; i++){
//     result = document.createElement('p');
//     result.textContent = `${i + 1} --  ${products[i].name}
//     was clicked ${products[i].clickCount}
//     times out of ${products[i].showCount} times shown.`;

//     resultsSection.appendChild(result);
//   }

// }

//New US: view a bar chart of shown and clicked for each item AFTER voting complete
function chartData(){
  //seed data
  var clicked =[];
  var shown = [];
  var labels = [];
  for (var i = 0; i < products.length; i++){
    clicked.push(products[i].clickCount);
    shown.push(products[i].showCount);
    labels.push(products[i].name);
  }
  return[clicked,shown,labels];
}

function renderChart(){
  // show chart
  var ctx = document.getElementById('resultsChart').getContext('2d');
  var resultsChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: chartData()[2],
      datasets: [{
        label: '# of Votes',
        data: chartData()[0],
        backgroundColor: [
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',

        ],
        borderColor: [
        ],
        borderWidth: 1,
        barPercentage: 1.0

      },
      {
        label: '# of Times Shown',
        data: chartData()[1],
        backgroundColor: [
          'whitesmoke',
          'whitesmoke',
          'whitesmoke',
          'whitesmoke',
          'whitesmoke',
          'whitesmoke',
          'whitesmoke',
          'whitesmoke',
          'whitesmoke',
          'whitesmoke',
          'whitesmoke',
          'whitesmoke',
          'whitesmoke',
          'whitesmoke',
          'whitesmoke',
          'whitesmoke',
          'whitesmoke',
          'whitesmoke',
          'whitesmoke',
          'whitesmoke',

        ],
        borderColor: [
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',
          '#005810',

        ],
        borderWidth: 1,
        barPercentage: 1.0
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            max: 25,
            stepSize: 1.0,
            beginAtZero: true
          }
        }]
      }
    }
  });

}

///////// start the show//////
start();
