const drinksArray = [
  {
    name: "Vodka",
    price: 5500,
    abv: 37.5,
    volume: 0.7
  }, 
  {
    name: "Whiskey",
    price: 7000,
    abv: 40,
    volume: 0.7
  }, 
  {
    name: "Pálinka",
    price: 10000,
    abv: 50,
    volume: 1
  }
];

function gettingDrunkCheap(drinks) {
  //write your code here
  let cheapestDrink = drinks[0];
  drinks.forEach(drink => {
    drink.pricePerAbv = Math.floor(drink.price / drink.volume / drink.abv)
  });
  
  drinks.forEach(drink => {
   if (drink.pricePerAbv < cheapestDrink.pricePerAbv) {
    cheapestDrink = drink;
    }
   });
   return cheapestDrink;

}

gettingDrunkCheap(drinksArray);


module.exports = gettingDrunkCheap
